import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import individual styling

import suryaNamaskar from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/Suryanamaskar-scaled.jpg";
import standingPose from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/standing_pose.jpg";
import seatedPoses from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/sitting_pose.jpg";
import backbends from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/backbends.jpg";
import restorativePoses from "C:/Users/shikh/Desktop/react/fitness-website/src/components/alignfitai/images/restoration.jpg";

const categories = [
  { name: "Surya Namaskar", image: suryaNamaskar },
  { name: "Standing Poses", image: standingPose },
  { name: "Seated & Forward Bends", image: seatedPoses },
  { name: "Backbends & Inversions", image: backbends },
  { name: "Supine & Restorative Poses", image: restorativePoses },

];

const Home = () => {
  return (
    <div className="home-container">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.image} alt={category.name} className="category-image" />
          <h2 className="category-title">{category.name}</h2>
          <Link to={`/category/${category.name}`} className="category-link">
            View Poses
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
