import React from "react";
import Sidebar from "../components/admindashboardcomponents/sidebar";
import Topbar from "../components/admindashboardcomponents/topbar";
import Dashboard from "./dashboard"; // Ensure this is the correct import path
import "./components/pages/admindashboard.css";

const AdminDashboard = () => {
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

          {/* Include Dashboard Features */}
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
