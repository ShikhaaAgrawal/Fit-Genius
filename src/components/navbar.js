import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate("/"); // Ensure we're on the home page first

    // Use a small delay to allow navigation to complete
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="logo">FitGenius</div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about-us")}>About Us</li>
        <li onClick={() => scrollToSection("services")}>Our Services</li>
        <li onClick={() => scrollToSection("blog")}>Blog</li>
        <li onClick={() => scrollToSection("testimonials")}>Testimonials</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
      <button className="nav-button">Try Us for Free</button>
    </nav>
  );
};

export default Navbar;
