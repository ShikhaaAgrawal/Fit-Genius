import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MainContent from "./components/mainc";
//import NutriVision from "./pages/nutriVision";
import AlignFit from "./pages/alignFit";
// import HarmonyHub from "./pages/harmonyHub";
//import FoodUpload from "./pages/FoodUpload";
//import RealTimeDetection from './pages/RealTimeDetection';
//import RecipeGenerator from "./pages/RecipeGenerator";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar should be inside Router */}
      <Routes>
        <Route path="/" element={<MainContent />} />

        <Route path="/alignfit" element={<AlignFit />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
