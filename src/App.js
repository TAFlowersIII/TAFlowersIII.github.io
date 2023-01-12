import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home.jsx"
import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx'
import Techstack from './components/techstack/Techstack.jsx'
import Topbar from './components/topbar/Topbar.jsx'
import Bottombar from './components/bottombar/Bottombar.jsx'

import "./app.scss"

// const logTimes = (id, phase, actualTime, baseTime, startTime, commitTime) => {
//   console.table ({id, phase, actualTime, baseTime, startTime, commitTime});
// };

function App() {

  return (

    <>

    <Topbar />

    <>

    {/* <Profiler id="app" onRender={logTimes} > */}

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/techstack" element={<Techstack />} />
      <Route path="/about" element={<About />} />

    </Routes>

    {/* </Profiler> */}

    </>

    <Bottombar />

    </>

  );
}

console.log("(C) 2023 Thomas A. Flowers III");

export default React.memo(App);
