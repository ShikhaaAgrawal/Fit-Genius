import React from "react";
import "./navbar.css";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
