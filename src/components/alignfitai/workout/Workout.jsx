import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WorkoutForm = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("Build muscle");
  const [days, setDays] = useState(3);
  const [duration, setDuration] = useState(45);
  const [medicalHistory, setMedicalHistory] = useState("");
  const [equipment, setEquipment] = useState([]);
  const [exercisePreference, setExercisePreference] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("Beginner");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = { gender, age, height, weight, goal, days, duration, medicalHistory, equipment, exercisePreference, fitnessLevel };

    try {
      const response = await fetch("http://localhost:5000/generate-workout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      navigate("/plan", { state: { workoutPlan: data.workout } });
    } catch (error) {
      console.error("Error generating workout:", error);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Create Your Workout Plan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block font-semibold">Gender:</label>
          <div className="flex space-x-4">
            <label><input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female</label>
          </div>
        </div>

        <div>
          <label className="block font-semibold">Age: {age} years</label>
          <input type="range" min="18" max="60" value={age} onChange={(e) => setAge(e.target.value)} className="w-full" />
        </div>

        <div>
          <label className="block font-semibold">Height (cm):</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full border p-2" />
        </div>

        <div>
          <label className="block font-semibold">Weight (kg):</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full border p-2" />
        </div>

        <div>
          <label className="block font-semibold">Workout Goal:</label>
          <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full border p-2">
            <option>Build muscle</option>
            <option>Lose weight</option>
            <option>Increase endurance</option>
            <option>General fitness</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Workout Days per Week: {days}</label>
          <input type="range" min="1" max="6" value={days} onChange={(e) => setDays(e.target.value)} className="w-full" />
        </div>

        <div>
          <label className="block font-semibold">Workout Duration (minutes):</label>
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full border p-2" />
        </div>

        <div>
          <label className="block font-semibold">Medical History:</label>
          <textarea value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} className="w-full border p-2"></textarea>
        </div>

        <div>
          <label className="block font-semibold">Available Equipment:</label>
          <select multiple value={equipment} onChange={(e) => setEquipment([...e.target.selectedOptions].map(o => o.value))} className="w-full border p-2">
            <option>Cardio</option>
            <option>Strength</option>
            <option>Functional</option>
            <option>Miscellaneous</option>
            <option>None</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Exercise Preference:</label>
          <input type="text" value={exercisePreference} onChange={(e) => setExercisePreference(e.target.value)} className="w-full border p-2" />
        </div>

        <div>
          <label className="block font-semibold">Fitness Level:</label>
          <select value={fitnessLevel} onChange={(e) => setFitnessLevel(e.target.value)} className="w-full border p-2">
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          {loading ? "Generating..." : "Generate Workout"}
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
