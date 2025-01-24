import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-subscribe">
        <h2>FREE FITNESS TIPS</h2>
        <p>Get a weekly dose of fitness directly into your mailbox.</p>
        <div className="subscribe-input">
          <input type="email" placeholder="Your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>COMPANY</h3>
          <ul>
            <li>About Us</li>
            <li>Press Release</li>
            <li>Employee Wellness</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Preferred Vendors</li>
            <li>Continued Operations, Accessibility and Maintenance</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>GYMS</h3>
          <ul>
            <li>Find a Gym</li>
            <li>Own a Gym</li>
            <li>Franchise Login</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>MEMBERS</h3>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Events & Gallery</li>
            <li>Get Marathon Ready</li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <a href="#"><i className="fa fa-instagram"></i></a>
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-youtube"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
