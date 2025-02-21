import { useState } from 'react'
import './App.css'
import Header from "./components/header";
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <header>
        <Header/>
      </header>
      <main>
      <Sidebar/>
      </main>
      
    </Router>
      
    </>
  )
}

export default App
