import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MainContent from "./components/mainc";
//import NutriVision from "./pages/nutriVision";
import AlignFit from "./components/pages/alignFit";
// import HarmonyHub from "./pages/harmonyHub";
//import FoodUpload from "./pages/FoodUpload";
//import RealTimeDetection from './pages/RealTimeDetection';
//import RecipeGenerator from "./pages/RecipeGenerator";
import Footer from "./components/footer";
import Home from "./components/alignfitai/pose_correction/home";
import CategoryPage from "./components/alignfitai/pose_correction/CategoryPage";
import PoseCorrection from "./components/alignfitai/pose_correction/PoseCorrection";

import Workout from "./components/alignfitai/workout/Workout";
import WorkoutPlan from "./components/alignfitai/workout/workoutplan";


function App() {
  return (
   
    <Router>
      <Navbar /> {/* Navbar should be inside Router */}
      <Routes>
        <Route path="/" element={<MainContent />} />

        <Route path="/alignfit" element={<AlignFit />} />
        <Route path="/Home_alignfit" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/pose/:poseName" element={<PoseCorrection />} />
        <Route path="/plan" element={<WorkoutPlan />} />
      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
