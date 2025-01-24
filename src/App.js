import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import AdminDashboard from "./pages/admindashboard";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Admin Dashboard */}
      </Routes>
    </div>
  );
}

export default App;
