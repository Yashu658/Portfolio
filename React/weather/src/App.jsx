import { useState } from "react";
import "./App.css";
import Header from "./components/header";

import Weather from "./components/weather";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Weather />
      </Router>
    </>
  );
}

export default App;
