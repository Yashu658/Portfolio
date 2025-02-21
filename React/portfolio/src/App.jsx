import React from 'react';
import "./App.css";
import Header from "./components/header";
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from "./pages/home";
import Exprience from "./pages/experience";
import Projects from "./pages/projects";
import Hobbies from "./pages/hobbies";
import Qualification from './pages/qualification';
import Contactme from "./pages/contactme";

 function App()
 {
  return(
    <>
    <Router>
      <header>
      <Header/>
      </header>
      <main className="">
      <Sidebar/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/exp"element={<Exprience/>}/>
        <Route path="/pro"element={<Projects/>}/>
        <Route path="/quali"element={<Qualification/>}/>
        <Route path="/hobbi"element={<Hobbies/>}/>
        <Route path="/cont"element={<Contactme/>}/>

      </Routes>
      </main>
    
    </Router>
    
   
    
    </>
  )
 }    

 export default App;