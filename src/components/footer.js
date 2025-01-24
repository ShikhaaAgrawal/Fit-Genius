import React from "react";
import { Link } from "react-router-dom"; 
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

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>Address</h3>
            <ul>
              <li>Integrations</li>
              <li>Hello</li>
              <li>Intercom</li>
              <li>Customer</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li>Our Blog</li>
              <li>Customers</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>Test Zoom</li>
              <li>Account</li>
              <li>Support Center</li>
              <li>Live Training</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      <p>
          © 2023 All Rights Reserved. Are you an Admin?  
          <Link to="/admin-dashboard"> Login here.</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
