import React, { useState } from "react";
import Sidebar from "../admindashboardcomponents/sidebar";
import Topbar from "../admindashboardcomponents/topbar";
import Dashboard from "../admindashboardcomponents/dashboard";
import AddUserOverlay from "./AddUserOverlay"; // New import for the AddUserOverlay component
import "./admindashboard.css";

const AdminDashboard = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => setIsOverlayOpen(true);
  const closeOverlay = () => setIsOverlayOpen(false);

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Topbar */}
        <Topbar />

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <h1>Admin Dashboard</h1>
          <p>Welcome to the Admin Dashboard. Here you can manage users, subscriptions, and more.</p>

          <button className="add-user-button" onClick={openOverlay}>
            Add New User
          </button>

          {/* Add User Overlay */}
          {isOverlayOpen && <AddUserOverlay closeOverlay={closeOverlay} />}

          <div className="user-table">
            {/* Table of User Details */}
            <h2>User Details</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Table Rows */}
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>johndoe@example.com</td>
                  <td>Admin</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
                {/* More user rows can be added dynamically */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
