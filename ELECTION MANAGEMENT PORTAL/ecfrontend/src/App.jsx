import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Componetes/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Candidatelogin from './pages/CandidateLogin';
import VoterLogin from './pages/VoterLogin';
import CandidateRegister from './pages/CandidateRegister';
import VoterRegister from "./pages/VoterRegister"
import AdminLogin from './pages/AdminLogin';
import Resetpassword from './pages/Resetpassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/Resetpassword" element={<Resetpassword/>}/>
      <Route path="/CandidateLogin" element={< Candidatelogin/>}/>
      <Route path="/VoterLogin" element={<VoterLogin/>}/>
      <Route path="/CandidateRegister" element={<CandidateRegister/>}/>
      <Route path="/VoterRegister" element={<VoterRegister/>}/>
     
      </Routes>
      <ToastContainer />
    </Router>
      
    </>
  )
}

export default App
