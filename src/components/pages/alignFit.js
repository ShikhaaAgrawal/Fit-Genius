import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import workoutImage from "C:/Users/shikh/Desktop/react/fitness-website/src/components/images/workout.jpg"; // Ensure this path is correct
import "./alignFit.css"; // Ensure styles are correctly linked

const AlignFit = () => {
  const navigate = useNavigate(); // For navigation
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component loads
  }, []);

  return (
    <div className="alignfit-container">
      <div className="alignfit-content" id="alignfit">
        <br></br>
        <br></br>
        <h1>AlignFit</h1>
        <p>Get personalized fitness routines and health tips powered by AI.</p>

     <div className="modules">
        <div className="module-card">
            <img src={workoutImage} alt="Posture Correction" className="module-image" />
            <h3>Posture Correction</h3>
            <p>Improve your posture with AI-driven feedback.</p>
            <button className="module-btn" onClick={() => navigate("/Home_alignfit")}>
              Try Now
              </button>
              </div>

   
          <div className="module-card">
            <img src={workoutImage} alt="Personalized Workout Plan" className="module-image" />
            <h3>Personalized Workout</h3>
            <p>AI-generated workout routines tailored to your goals.</p>
            <button className="module-btn"onClick={() => navigate("/workout")}>Try Now</button>
          </div>

          <div className="module-card">
            <img src={workoutImage} alt="Track Progress" className="module-image" />
            <h3>Progress Tracker</h3>
            <p>Track your fitness journey with AI-driven progress analysis.</p>
            <button className="module-btn">Try Now</button>
          </div>

          <div className="module-card">
            <img src={workoutImage} alt="Track Progress" className="module-image" />
            <h3>Training Videos</h3>
            <p>Track your fitness journey with AI-driven progress analysis.</p>
            <button className="module-btn">Try Now</button>
          </div>


          </div>
        </div>
      </div>
 
  );
};

export default AlignFit;
