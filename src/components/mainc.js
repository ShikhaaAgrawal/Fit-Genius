import React, { useState, useRef } from "react";
import "./mainc.css";
import mealImage from "./images/meal.jpg";
import workoutImage from "./images/workout.jpg";
import yogaImage from "./images/yoga.jpg";
import trainerImage1 from "./images/trainerimage1.jpg";
import trainerImage2 from "./images/trainerimage2.jpg";
import trainerImage3 from "./images/trainerimage3.jpg";
import { Link } from "react-router-dom";

const MainContent = () => {
  const images = [mealImage, workoutImage, yogaImage];
  const [centerIndex, setCenterIndex] = useState(1); // Default center image index
  const carouselRef = useRef(null);

  const handleScrollLeft = () => {
    if (centerIndex > 0) {
      setCenterIndex(centerIndex - 1);
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (centerIndex < images.length - 1) {
      setCenterIndex(centerIndex + 1);
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Carousel Section */}
      <div className="carousel-section" id='home'>
      
        <h2 className="carousel-heading">
          <br/>
          <br/>

          Get Your Perfect Workout <br />
          
            With The <span><strong>Perfect Trainers</strong>
          </span>
        </h2>
        <br/>
        <br/>
        <div className="carousel-container">
          <button
            className="carousel-arrow left-arrow"
            onClick={handleScrollLeft}
            disabled={centerIndex === 0} // Disable button if at start
          >
            ←
          </button>
          <div className="carousel-images" ref={carouselRef}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Carousel ${index + 1}`}
                className={`carousel-image ${
                  index === centerIndex ? "center-image" : ""
                }`}
                onMouseEnter={() => setCenterIndex(index)} // Update center image on hover
              />
            ))}
          </div>
          <button
            className="carousel-arrow right-arrow"
            onClick={handleScrollRight}
            disabled={centerIndex === images.length - 1} // Disable button if at end
          >
            →
          </button>
        </div>
      </div>

  {/* About Us Section */}
<div className="aboutus-section" id="about-us">
  <div className="aboutus-content">
    {/* Text Content */}
    <div className="aboutus-text" >
      <h2 className="section-heading">About Us</h2>
      <p>
      Welcome to <strong>FIT-GENIUS: AI-Powered Fitness Platform</strong>, where innovation meets wellness. Our mission is to make fitness accessible, personalized, and engaging for everyone by leveraging the power of artificial intelligence.
      </p>
      <p>
      At FIT-GENIUS, we offer customized workout plans, smart nutrition insights, and real-time wellness tools designed to adapt to your unique goals and lifestyle. Whether you're a beginner starting your fitness journey or someone striving to optimize your health, our platform provides the guidance and resources you need—all in one place.
      </p>
      <p>
      With a focus on empowering users through technology, FIT-GENIOUS is here to support you every step of the way as you work toward a healthier, stronger, and more balanced life.
      </p>
    </div>
    
    {/* Images */}
    <div className="aboutus-images">
      <img src={trainerImage1} alt="Trainer 1" className="aboutus-image" />
      <img src={trainerImage2} alt="Trainer 2" className="aboutus-image" />
      <img src={trainerImage3} alt="Trainer 3" className="aboutus-image" />
    </div>
  </div>
</div>


  {/* Our Services Section */}
<div className="services-section" id="services">
  <h2 className="section-heading">Our Services</h2>
  <div className="services-container">
    <div className="service-card">
      <img src={workoutImage} alt="Personal Training" className="service-image" />
      <h3>AlignFit AI</h3>
      <p>Get one-on-one training sessions with our expert trainers.</p>
      <br/>
      <Link to="/alignfit" className="know-more-btn">Know More</Link>
    </div>
    <div className="service-card">
      <img src={mealImage} alt="Nutrition Plans" className="service-image" />
      <h3>NutriVision</h3>
      <p>Customized meal plans to complement your workout routine.</p>
      <button className="know-more-btn">Know More</button>
    </div>
    <div className="service-card">
      <img src={yogaImage} alt="Yoga Classes" className="service-image" />
      <h3>HarmonyHub</h3>
      <p>Join our sessions to improve health and mindfulness.</p>
      <button className="know-more-btn">Know More</button>
    </div>
  </div>
</div>


{/* Blog Section */}
<div className="blog-section" id="blog">
  <br />
  <br />
  <h2 className="section-heading">Latest Blogs</h2>

  <div className="blog-grid">
    <div className="blog-item">
      <img src={mealImage} alt="Blog 1" className="blog-image" />
      <h3 className="blog-title">10 Tips for a Healthier Lifestyle</h3>
      <p className="blog-snippet">
        Discover small changes that can make a big difference in your health and wellness journey.
      </p>
      <a href="/blog/1" className="read-more">Read More</a>
    </div>

    <div className="blog-item">
      <img src={trainerImage1} alt="Blog 2" className="blog-image" />
      <h3 className="blog-title">How to Stay Motivated at the Gym</h3>
      <p className="blog-snippet">
        Struggling to stay consistent? Here are proven strategies to keep you going.
      </p>
      <a href="/blog/2" className="read-more">Read More</a>
    </div>

    <div className="blog-item">
      <img src={workoutImage} alt="Blog 3" className="blog-image" />
      <h3 className="blog-title">Yoga for Beginners</h3>
      <p className="blog-snippet">
        Start your yoga journey with these beginner-friendly poses and tips.
      </p>
      <a href="/blog/3" className="read-more">Read More</a>
    </div>
    
  </div>
  <a href="/all-blogs" className="view-more-blogs">View More Blogs</a>
</div>


{/* Testimonials Section */}
<div className="testimonials-section" id="testimonials">
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <h2 className="section-heading">Testimonials</h2>

  {/* Grid Container */}
  <div className="testimonial-grid">
    <div className="testimonial-item">
      <div className="testimonial-item-inner">
        <div className="testimonial-item-front">
          <img
            src={trainerImage1} // First part of the image
            alt="Alex P."
            className="testimonial-image"
          />
        </div>
        <div className="testimonial-item-back">
          <p>
            "The trainers here are amazing! I've seen incredible progress in my fitness journey."
          </p>
          <p className="testimonial-author">- Alex P.</p>
        </div>
      </div>
    </div>

    <div className="testimonial-item">
      <div className="testimonial-item-inner">
        <div className="testimonial-item-front">
          <img
            src={mealImage} // Second part of the image
            alt="Jamie L."
            className="testimonial-image"
          />
        </div>
        <div className="testimonial-item-back">
          <p>
            "The personalized nutrition plan made a huge difference in my energy levels."
          </p>
          <p className="testimonial-author">- Jamie L.</p>
        </div>
      </div>
    </div>

    <div className="testimonial-item">
      <div className="testimonial-item-inner">
        <div className="testimonial-item-front">
          <img
            src={workoutImage} // Third part of the image
            alt="Sarah W."
            className="testimonial-image"
          />
        </div>
        <div className="testimonial-item-back">
          <p>
            "I love the yoga sessions! They help me with flexibility and mindfulness."
          </p>
          <p className="testimonial-author">- Sarah W.</p>
        </div>
      </div>
    </div>

    <div className="testimonial-item">
      <div className="testimonial-item-inner">
        <div className="testimonial-item-front">
          <img
            src={trainerImage2} // First part of the image again
            alt="James B."
            className="testimonial-image"
          />
        </div>
        <div className="testimonial-item-back">
          <p>
            "The admin support is excellent, always ready to help when needed!"
          </p>
          <p className="testimonial-author">- James B.</p>
        </div>
      </div>
    </div>

    <div className="testimonial-item">
      <div className="testimonial-item-inner">
        <div className="testimonial-item-front">
          <img
            src={yogaImage} // Second part of the image
            alt="Mia T."
            className="testimonial-image"
          />
        </div>
        <div className="testimonial-item-back">
          <p>
            "The atmosphere at this gym is fantastic, always motivating."
          </p>
          <p className="testimonial-author">- Mia T.</p>
        </div>
      </div>
    </div>

    <div className="testimonial-item">
      <div className="testimonial-item-inner">
        <div className="testimonial-item-front">
          <img
            src={trainerImage3} // Third part of the image
            alt="Nathan D."
            className="testimonial-image"
          />
        </div>
        <div className="testimonial-item-back">
          <p>
            "The app is user-friendly and has everything I need to track my progress."
          </p>
          <p className="testimonial-author">- Nathan D.</p>
        </div>
      </div>
    </div>

  

    
  </div>
</div>


    </div>
  );
};

export default MainContent;
