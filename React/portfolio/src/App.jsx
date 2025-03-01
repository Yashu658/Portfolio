import React from "react";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";

import Projects from "./pages/projects";
import Hobbies from "./pages/hobbies";
import Qualification from "./pages/qualification";
import Contactme from "./pages/contactme";
import Resume from "./pages/resume";

function App() {
  return (
    <>
      <Router>
        <main className="">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pro" element={<Projects />} />
            <Route path="/quali" element={<Qualification />} />
            <Route path="/hobbi" element={<Hobbies />} />
            <Route path="/contact" element={<Contactme />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
