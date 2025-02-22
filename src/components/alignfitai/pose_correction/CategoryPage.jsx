import React from "react";
import { useParams, Link } from "react-router-dom";
import "./CategoryPage.css"; // Import individual styling

// Import images from src/images/poses
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

import seatedForwardBend from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/sfb.jpg";
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

const categoryPoses = {
  "Surya Namaskar": [
    { display: "Prayer Pose", backend: "prayer_pose", image: tadasana },
    { display: "Raised arms pose", backend: "Raised-arms-pose", image: raisedarm },
    { display: "Standing Forward Bend", backend: "Standing-Forward-Bend", image: uttanasana },
    { display: "Equestrian Pose", backend: "Equestrian-Pose", image: equestrian },
    { display: "Stick pose", backend: "Stick-pose", image: plank },
    { display: "Eight-Limbed Pose", backend: "Eight-Limbed-Pose", image: eightLimbed },
    { display: "Cobra Pose", backend: "Cobra-pose", image: cobra },
    { display: "Downward-Facing Dog", backend: "downdog", image: downwardDog },
   

  ],
  "Standing Poses": [
    { display: "Mountain Pose", backend: "downdog", image: downwardDog },
    { display: "Warrior I Pose", backend: "warrior-I", image: warrior1 },
    { display: "Warrior II Pose", backend: "warrior-II", image: warrior2 },
    { display: "Triangle Pose", backend: "triangle-pose", image: triangle },
    
    { display: "Half Moon Pose", backend: "half-moon", image: halfMoon },
  ],
  "Seated & Forward Bends": [
    { display: "Easy Pose", backend: "sukhasana", image: easyPose },
    { display: "Seated Forward Bend", backend: "paschimottanasana", image: seatedForwardBend },
    { display: "Bound Angle Pose", backend: "baddha-konasana", image: boundAngle },
    { display: "Bow Pose", backend: "Bow_Pose", image: bowPose },
   
   
  ],
  "Backbends & Inversions": [
    { display: "Cobra Pose", backend: "Cobra-pose", image: cobra },
    { display: "Camel Pose", backend: "ustrasana", image: camel },
    { display: "Shoulderstand", backend: "sarvangasana", image: shoulderstand },
    { display: "Upward Bow Pose", backend: "upward-bow", image: upwardBow },
   
  ],
  "Supine & Restorative Poses": [
    { display: "Corpse Pose", backend: "savasana", image: savasana },
 
    { display: "Bridge Pose", backend: "setu-bandhasana", image: bridge },
    { display: "Legs Up The Wall Pose", backend: "legs-up-wall", image: legsUpWall },
  ],
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const poses = categoryPoses[categoryName] || [];

  return (
    <div className="container">
    <br></br>
      <h1>{categoryName}</h1>
      <div className="category-grid">
        {poses.map((pose, index) => (
          <div key={index} className="pose-card">
            <img src={pose.image} alt={pose.display} />
            <div className="pose-content">
              <h2>{pose.display}</h2>
              <Link to={`/pose/${pose.backend}`} className="start-btn">
                Start Correction
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
