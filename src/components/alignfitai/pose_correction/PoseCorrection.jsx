import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PoseCorrection.css"; // Importing the separate CSS file

// Import images for correct postures
import tadasana from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/1_Prayer-pose.jpg";
import raisedarm from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/2_Raised-arm-pose.jpg";
import uttanasana from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/3_standing-forward-bend-pose.jpg";
import equestrian from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/4_equestrian-pose.jpg";
import plank from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/5_stick-pose.jpg";
import eightLimbed from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/6_saluting-with-eight-parts.jpg";
import cobra from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/7_cobra-pose.jpg";
import downwardDog from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/8_moutnain-pose.jpg";
import warrior1 from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/warrior-I.jpg";
import triangle from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/triangle.jpeg";
import easyPose from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/sukhasana.jpg";
import seatedForwardBend from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/sfb.jpg"

import boundAngle from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/baddha-konasana.jpeg";
import camel from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/ustrasana.png";
import shoulderstand from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/sarvangasana.jpg";
import savasana from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/savaasana.jpeg";
import bridge from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/bridge.png";
import warrior2 from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/warrior-II.jpg";
import halfMoon from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/halfmoon.jpg";
import bowPose from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/bow_pose.jpg";
import upwardBow from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/upward_bow.jpg";
import legsUpWall from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/legsupwall.jpg";

// Pose mapping (backend names to correct images)
const poseImages = {
  "prayer_pose": tadasana,
  "Raised-arms-pose": raisedarm,
  "Standing-Forward-Bend": uttanasana,
  "Equestrian-Pose": equestrian,
  "Stick-pose": plank,
  "Eight-Limbed-Pose": eightLimbed,
  "Cobra-pose": cobra,
  "downdog": downwardDog,
  "warrior-I": warrior1,
  "warrior-II": warrior2,
  "triangle-pose": triangle,
  "sukhasana": easyPose,
  "paschimottanasana": seatedForwardBend,
  "baddha-konasana": boundAngle,
  "Bow_Pose": bowPose,
  "ustrasana": camel,
  "sarvangasana": shoulderstand,
  "savasana": savasana,
  "setu-bandhasana": bridge,
  "upward-bow": upwardBow,
  "legs-up-wall": legsUpWall,
  "half-moon": halfMoon,
};

const PoseCorrection = () => {
  const { poseName } = useParams();
  const [feedback, setFeedback] = useState("Loading feedback...");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeedback = () => {
      fetch(`http://127.0.0.1:5000/pose_feedback?pose=${poseName}`)
        .then((res) => res.json())
        .then((data) => {
          setFeedback(data.feedback || "No feedback available.");
          setError("");
        })
        .catch(() => setError("Error fetching pose correction data."));
    };

    fetchFeedback();
    const interval = setInterval(fetchFeedback, 5000);

    return () => clearInterval(interval);
  }, [poseName]);

  return (
    
    <div className="pose-container">
      {/* Live Pose Correction Video */}
      <br></br>
      <div className="pose-section">
        <h1>Your Pose Correction</h1>
        <img
          src={`http://127.0.0.1:5000/video_feed?pose=${poseName}`}
          alt="Pose Correction"
        />
      </div>

      {/* Correct Posture Reference */}
      <div className="pose-section">
        <h1>Correct Posture</h1>
        <img
          src={poseImages[poseName] || "/images/placeholder.png"}
          alt="Correct Pose"
        />
        {error ? (
          <p className="feedback error">{error}</p>
        ) : (
          <p className="feedback">{feedback}</p>
        )}
      </div>
    </div>
  );
};

export default PoseCorrection;
