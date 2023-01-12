import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./components/home/Home.jsx"
import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx'
import Techstack from './components/techstack/Techstack.jsx'

import "./app.scss"

function App() {
  return (

    <>

    <Home />
    <Projects />
    <Techstack />
    <About />


    {/* <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/techstack" element={<Techstack />} />
      <Route path="/about" element={<About />} />

    </Routes> */}
    </>

  );
}

console.log("(C) 2023 Thomas A. Flowers III");

export default App;
