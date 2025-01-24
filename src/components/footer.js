import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      {/* Subscribe Section */}
      <div className="footer-subscribe">
        <h2>WEEKLY FITNESS TIPS</h2>
        <p>Sign up to receive expert fitness advice, health tips, and updates delivered straight to your inbox.</p>
        <div className="subscribe-input">
          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      {/* Links Section */}
      <div className="footer-links">
        <div className="footer-column">
          <h3>ABOUT US</h3>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>GET INVOLVED</h3>
          <ul>
            <li>Find a Gym</li>
            <li>Partner With Us</li>
            <li>Become a Trainer</li>
            <li>Franchise Opportunities</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>RESOURCES</h3>
          <ul>
            <li>FAQs</li>
            <li>Contact Support</li>
            <li>Events & Challenges</li>
            <li>Workout Plans</li>
            <li>Nutrition Guides</li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      {/* <div className="footer-social">
        <p>Follow Us</p>
        <a href="#" aria-label="Instagram"><i className="fa fa-instagram"></i></a>
        <a href="#" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a>
        <a href="#" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
        <a href="#" aria-label="YouTube"><i className="fa fa-youtube"></i></a>
      </div> */}

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 FitnessPro. All Rights Reserved. Built with 💪 for your health journey.</p>
      </div>
    </footer>
  );
};

export default Footer;
