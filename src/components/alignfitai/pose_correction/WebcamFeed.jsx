import React from "react";
import { useParams } from "react-router-dom";
import "./PoseCorrection.css";

const WebcamFeed = () => {
  const { poseName } = useParams();

  return (
    <div className="pose-container">
      <br></br>
      {/* Left: Live Pose Correction Video */}
      <div className="pose-section">
        <h1>Your Pose Correction</h1>
        <img
          src={`http://127.0.0.1:5000/video_feed?pose=${poseName}`}
          alt="Pose Correction"
        />
      </div>

      {/* Right: Correct Pose Reference Image */}
      <div className="pose-section">
        <h1>Correct Posture</h1>
        <img
          src={`/images/${poseName}.jpg`} // Load the correct pose reference image
          alt="Correct Pose"
        />
      </div>
    </div>
  );
};

export default WebcamFeed;
