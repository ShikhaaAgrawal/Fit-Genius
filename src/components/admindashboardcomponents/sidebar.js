import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="brand">
        <h2>Fit Genius</h2>
      </div>
      <nav>
        <ul>
          <li className="active">
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Customers</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
        </ul>
      </nav>
      <div className="settings">
        <ul>
          <li>
            <a href="#">Messages</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Help Centre</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
