import cv2
import mediapipe as mp
import numpy as np
import csv
import time
from flask import Flask, Response, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import json


app = Flask(__name__)
CORS(app)

# Initialize Mediapipe Pose Model
mp_pose = mp.solutions.pose
pose = mp_pose.Pose()
mp_drawing = mp.solutions.drawing_utils

# Open webcam
cap = cv2.VideoCapture(0)

# Correction tolerance
CORRECTION_VALUE = 70


# Joint indices for angle calculations
angle_coordinates = [
    [13, 15, 19], [14, 16, 18], [11, 13, 15], [12, 14, 16],
    [13, 11, 23], [14, 12, 24], [23, 25, 27], [24, 26, 28],
    [23, 27, 31], [24, 28, 32], [24, 23, 25], [23, 24, 26]
]

angle_name_list = [
    "L-wrist", "R-wrist", "L-elbow", "R-elbow", "L-shoulder", "R-shoulder",
    "L-knee", "R-knee", "L-ankle", "R-ankle", "L-hip", "R-hip"
]

# Function to calculate angle between three points
def calculate_angle(landmark1, landmark2, landmark3):
    radians = np.arctan2(landmark3[1] - landmark2[1], landmark3[0] - landmark2[0]) - \
              np.arctan2(landmark1[1] - landmark2[1], landmark1[0] - landmark2[0])
    angle = np.abs(np.degrees(radians))
    return angle + 360 if angle < 0 else angle

# Function to load reference angles for a given pose
def load_reference_angles(csv_path, pose_name):
    with open(csv_path, 'r') as file:
        reader = csv.reader(file)
        for row in reader:
            if row[12].strip().lower() == pose_name.strip().lower():  
                return [float(row[i]) for i in range(12)]  
    return None  

# Video streaming function
def generate_frames(pose_name):
    if not pose_name or pose_name.lower() == "none":
        while True:
            success, frame = cap.read()
            if not success:
                break
            cv2.putText(frame, "Please select a pose.", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 255), 2)
            _, buffer = cv2.imencode('.jpg', frame)
            frame_bytes = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

    reference_angles = load_reference_angles('average_pose_angles.csv', pose_name)
    if reference_angles is None:
        print(f"Pose '{pose_name}' not found in CSV file.")
        return

    fps_time = 0
    frame_id = 0  # Force sequential timestamps

    while True:
        success, frame = cap.read()
        if not success:
            break

        frame_id += 1  # Increment frame count
        time.sleep(0.03)  # Small delay to prevent timestamp mismatch

        height, width, _ = frame.shape
        image_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        
        # Ensure frame is processed in correct order
        results = pose.process(image_rgb)

        incorrect_angles = []
        correct_count = 0  

        if results.pose_landmarks:
            mp_drawing.draw_landmarks(frame, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)
            landmarks = results.pose_landmarks.landmark

            for idx, coords in enumerate(angle_coordinates):
                point_a = (int(landmarks[coords[0]].x * width), int(landmarks[coords[0]].y * height))
                point_b = (int(landmarks[coords[1]].x * width), int(landmarks[coords[1]].y * height))
                point_c = (int(landmarks[coords[2]].x * width), int(landmarks[coords[2]].y * height))

                angle_obtained = calculate_angle(point_a, point_b, point_c)

                if angle_obtained < reference_angles[idx] - CORRECTION_VALUE:
                    status = "Move Closer"
                    incorrect_angles.append(f"{angle_name_list[idx]}: {status}")
                    color = (0, 0, 255)  
                elif angle_obtained > reference_angles[idx] + CORRECTION_VALUE:
                    status = "Move Away"
                    incorrect_angles.append(f"{angle_name_list[idx]}: {status}")
                    color = (0, 0, 255)  
                else:
                    status = "Correct"
                    color = (255, 0, 0)  
                    correct_count += 1  

                cv2.putText(frame, f"{angle_name_list[idx]}: {status}", (point_b[0] - 50, point_b[1] - 10),
                            cv2.FONT_HERSHEY_PLAIN, 1, color, 2)

            pose_status = "Correct Pose" if correct_count >= 10 else "Wrong Pose"
            pose_color = (0, 255, 0) if correct_count >= 10 else (0, 0, 255)
            collective_feedback = "Your pose is correct!" if correct_count >= 10 else "Adjust your posture."

            cv2.putText(frame, pose_status, (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1.5, pose_color, 3)
            fps_text = f"FPS: {1.0 / (time.time() - fps_time):.2f}"
            cv2.putText(frame, fps_text, (10, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
            fps_time = time.time()

        _, buffer = cv2.imencode('.jpg', frame)
        frame_bytes = buffer.tobytes()

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

@app.route('/video_feed')
def video_feed():
    pose_name = request.args.get('pose', 'none')  
    return Response(generate_frames(pose_name), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/pose_feedback')
def pose_feedback():
    pose_name = request.args.get('pose', 'none')
    reference_angles = load_reference_angles('average_pose_angles.csv', pose_name)

    if reference_angles is None:
        return jsonify({"feedback": "No pose selected", "correct_pose_image": ""})

    return jsonify({
        "feedback": f"Correct posture reference for {pose_name}",
        "correct_pose_image": f"/static/images/{pose_name}.jpg"
    })

# ===================== Workout Plan Generator ===================== #
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="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",
)

@app.route('/generate-workout', methods=['POST'])
def generate_workout():
    data = request.json

    prompt = f"""
    Generate a structured weekly workout plan for a {data['gender']} aged {data['age']} years, height {data['height']} cm, weight {data['weight']} kg. 
    The goal is to {data['goal']}, working out {data['days']} days per week for {data['duration']} minutes per session.
    Medical history: {data['medicalHistory'] or "None"}.
    Equipment available: {', '.join(data['equipment']) if data['equipment'] else "None"}.
    Exercise preferences: {data['exercisePreference']}.
    Current fitness level: {data['fitnessLevel']}.

    The output should be a structured JSON object with the following format:
    {{
        "description": "A short description of the workout plan.",
        "goal": "{data['goal']}",
        "level": "{data['fitnessLevel']}",
        "daysPerWeek": {data['days']},
        "schedule": {{
            "Day 1": "Workout focus for the day",
            "Day 2": "Workout focus for the day"
        }},
        "workouts": {{
            "Day 1": [
                {{"exercise": "Exercise Name", "sets": "X", "reps": "Y", "rest": "Z sec", "notes": "Exercise details"}}
            ],
            "Day 2": [
                {{"exercise": "Exercise Name", "sets": "X", "reps": "Y", "rest": "Z sec", "notes": "Exercise details"}}
            ]
        }}
    }}
    The response should be only in JSON format.
    """

    try:
        completion = client.chat.completions.create(
            model="google/gemini-2.0-pro-exp-02-05:free",
            messages=[{"role": "user", "content": prompt}]
        )
        return jsonify({"workout": json.loads(completion.choices[0].message.content)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ===================== Run Flask App ===================== #
if __name__ == "__main__":
    app.run(debug=True)
