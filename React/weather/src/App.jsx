import { useState } from 'react'
import './App.css'
import Header from "./components/header";
import Sidebar from './components/sidebar';
import Weather from './components/weather';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      
        <Header/>
      
      
        <Weather/>
      <Sidebar/>
      
      
    </Router>
      
    </>
  )
}

export default App
