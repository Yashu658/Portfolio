import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Header from './components/header'
import Converter from './components/converter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Header/>
      <Converter/>
      </Router>
    </>
  )
}

export default App
