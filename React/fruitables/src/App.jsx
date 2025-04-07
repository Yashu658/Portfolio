import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from "./components/footer"
import Home from './pages/home'
import Pages from "./pages/pages"
import Search from './pages/search'
import Shop from "./pages/shop"
import Shopdetail from "./pages/shopdetail"
import Contact from "./pages/contact"


function App() {
  

  return (
    <>
     <Router>
      
      
      <Navbar/>
      <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/shopdetail" element={< Shopdetail />} />
      <Route path="/shop"element={<Shop/>}/>
      <Route path="/Pages"element={<Pages/>}/>
      <Route path="/search"element={<Search/>}/>
      </Routes>
      
     <Footer/>
      </Router>
    </>
  )
}

export default App
