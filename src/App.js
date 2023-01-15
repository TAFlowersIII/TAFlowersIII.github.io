import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx"
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Techstack from './components/Techstack.jsx'
import Topbar from './components/Topbar.jsx'
import Bottombar from './components/Bottombar.jsx'

import "./styles/globals.scss"

function App() {

  return (
    <Router>
    <div className="app">
      <Topbar />
    <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/techstack" element={<Techstack />} /> 
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
      <Bottombar />
    </div>
    </Router>
  );
}

console.log("(C) 2023 Thomas A. Flowers III");

export default App;
