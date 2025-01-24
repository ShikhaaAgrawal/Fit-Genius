import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import AdminDashboard from "./components/pages/admindashboard";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {


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
