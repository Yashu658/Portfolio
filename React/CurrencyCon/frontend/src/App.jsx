import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "../src/pages/Registeration/Register.jsx";
import Aboutus from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact";
import EmployeeDashbaord from "./pages/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "../src/pages/Dashboard/AdminDashboard.jsx";
import HODDashboard from "./pages/Dashboard/HODDashboard.jsx"
import AdminRegister from "./pages/Registeration/adminRegister.jsx";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employee-dashboard" element={<EmployeeDashbaord />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/hod-dashboard" element={<HODDashboard />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          
        </Routes>
      </Router>
    </>
  );
};

export default App;