import React from "react";
import "./mainc.css";
import mealImage from "./images/meal.jpg";
import workoutImage from "./images/workout.jpg";
import yogaImage from "./images/yoga.jpg";
import trainerImage1 from "./images/trainerimage1.jpg";
import trainerImage2 from "./images/trainerimage2.jpg";
import trainerImage3 from "./images/trainerimage3.jpg";

const MainContent = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div className="carousel-section">
        <h2 className="carousel-heading">
          Get Your Perfect Workout <br />
          <span>
            With The <strong>Perfect Trainers</strong>
          </span>
        </h2>
        <div className="carousel-container">
          <button className="carousel-arrow left-arrow">←</button>
          <div className="carousel-images">
            <img src={mealImage} alt="Healthy Meal" className="carousel-image" />
            <img
              src={workoutImage}
              alt="Workout"
              className="carousel-image center-image"
            />
            <img src={yogaImage} alt="Yoga Pose" className="carousel-image" />
          </div>
          <button className="carousel-arrow right-arrow">→</button>
        </div>
      </div>
       {/* About Us Section */}
       <div className="aboutus-section">
        <div className="aboutus-content">
          <div className="aboutus-text">
            <h2 className="section-heading">About Us</h2>
            <p>
              We are dedicated to helping you achieve your fitness goals through personalized training and nutrition plans. Our team of certified professionals is committed to providing the best guidance and support to ensure your success.
            </p>
          </div>
          <div className="aboutus-images">
            <img src={trainerImage1} alt="Trainer 1" className="aboutus-image" />
            <img src={trainerImage2} alt="Trainer 2" className="aboutus-image" />
            <img src={trainerImage3} alt="Trainer 3" className="aboutus-image" />
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="services-section">
        <h2 className="section-heading">Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Personal Training</h3>
            <p>Get one-on-one training sessions with our expert trainers.</p>
          </div>
          <div className="service-card">
            <h3>Nutrition Plans</h3>
            <p>Customized meal plans to complement your workout routine.</p>
          </div>
          <div className="service-card">
            <h3>Yoga Classes</h3>
            <p>Join our yoga sessions to improve flexibility and mindfulness.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="section-heading">Testimonials</h2>
        <div className="testimonial">
          <p>
            "The trainers here are amazing! I've seen incredible progress in my
            fitness journey."
          </p>
          <p className="testimonial-author">- Alex P.</p>
        </div>
        <div className="testimonial">
          <p>
            "The personalized nutrition plan made a huge difference in my
            energy levels."
          </p>
          <p className="testimonial-author">- Jamie L.</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
