import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import "./alignFit.css"; // Make sure your styles are correct

const AlignFit = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensures the page scrolls to the top of AlignFit module
  }, []);

//   const scrollToServices = () => {
//     window.location.href = "/#services"; // Navigate to the services section of the homepage
//   };

  return (
    <div className="alignfit-container">
      <div className="alignfit-content" id="alignfit">
        <h1>AlignFit</h1>
        <p>Get personalized fitness routines and health tips powered by AI.</p>

        <div className="modules">
          <div className="module-card">
            <img
              src={require("../components/images/workout.jpg")}
              alt="Personalized Workout"
              className="module-image"
            />
            <h3>Personalized Workout</h3>
            <p>AI-generated workout routines tailored to your goals.</p>
            <button className="module-btn">Try Now</button>
          </div>

          <div className="module-card">
            <img
              src={require("../components/images/yoga.jpg")}
              alt="Nutrition Guidance"
              className="module-image"
            />
            <h3>Nutrition Guidance</h3>
            <p>AI-based nutrition recommendations to complement your workout.</p>
            <button className="module-btn">Try Now</button>
          </div>

          <div className="module-card">
            <img
              src={require("../components/images/workout.jpg")}
              alt="Track Progress"
              className="module-image"
            />
            <h3>Progress Tracker</h3>
            <p>Track your fitness journey with AI-driven progress analysis.</p>
            <button className="module-btn">Try Now</button>
          </div>
        </div>

        {/* <div className="nav-links1">
          <Link to="/" className="home-btn">Back to Home</Link>
          <button className="scroll-btn" onClick={scrollToServices}>
            Go to Services
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AlignFit;
