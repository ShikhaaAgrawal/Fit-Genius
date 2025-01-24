import React, { useState } from "react";
import "./AddUserOverlay.css";

const AddUserOverlay = ({ closeOverlay }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding the user logic
    console.log("New User Data:", userData);
    closeOverlay(); // Close overlay after submission
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
          <label>Role</label>
          <select
            name="role"
            value={userData.role}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Moderator">Moderator</option>
          </select>
          <button type="submit">Add User</button>
          <button type="button" className="close-button" onClick={closeOverlay}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserOverlay;
