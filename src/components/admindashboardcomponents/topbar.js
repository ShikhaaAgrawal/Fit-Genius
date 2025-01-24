import React from "react";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="icons">
        <img src="/images/notification-icon.png" alt="Notifications" />
        <img src="/images/message-icon.png" alt="Messages" />
        <div className="profile">
          <img src="/images/profile-pic.png" alt="Profile" />
          <span>Derek Alvarado</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
