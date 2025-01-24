import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ANYTIME FITNESS</div>
      <ul className="nav-links">
        <li>Find a Gym</li>
        <li>Why Join</li>
        <li>Franchise</li>
        <li>Training</li>
        <li>AF Safe</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <button className="nav-button">Try Us for Free</button>
    </nav>
  );
};

export default Navbar;
