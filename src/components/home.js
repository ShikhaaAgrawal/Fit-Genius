import React from 'react';
import './home.css'; // Import the CSS file for styling

function Home() {
    return (
        <div className="home">
            {/* Header Section */}
            <header className="home-header">
                <h1>Welcome to FitLife</h1>
                <p>Your journey to fitness starts here!</p>
                <button className="cta-button">Get Started</button>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h2>Transform Your Life</h2>
                    <p>Join us for personalized workout routines, live training sessions, and healthy recipes.</p>
                </div>
                <div className="hero-image">
                    <img src="/assets/images/fitness-hero.jpg" alt="Fitness Hero" />
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="feature">
                    <h3>Workouts</h3>
                    <p>Explore a variety of workout plans tailored to your needs.</p>
                </div>
                <div className="feature">
                    <h3>Healthy Recipes</h3>
                    <p>Discover delicious and nutritious recipes to stay healthy.</p>
                </div>
                <div className="feature">
                    <h3>Live Sessions</h3>
                    <p>Join live sessions with top fitness trainers.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
