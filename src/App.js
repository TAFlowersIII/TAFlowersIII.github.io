import React from "react";

import Topbar from './components/topbar/Topbar.jsx'
import Home from "./components/home/Home.jsx"
import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx'
import Techstack from './components/techstack/Techstack.jsx'

import "./app.scss"

function App() {
  return (
    <div className="app">

      <Topbar />

      <div className="sections">

        <Home />
        <Projects />
        <Techstack />
        <About />

      </div>
    </div>
  );
}

export default App;
