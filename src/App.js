import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Topbar from './components/topbar/Topbar.jsx'
import Home from "./components/home/Home.jsx"
import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx'
import Techstack from './components/techstack/Techstack.jsx'

import "./app.scss"

function App() {
  return (

    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/techstack">Tech Stack</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/techstack" element={<Techstack />} />
      <Route path="/about" element={<About />} />

    </Routes>
    </>

  );
}

export default App;
