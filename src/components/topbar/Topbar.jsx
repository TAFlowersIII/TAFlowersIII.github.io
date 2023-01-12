import React from 'react'
import { createContext, useState } from 'react';
import './Topbar.scss'

export const ThemeContext = createContext(null);

function Topbar() {
  
  let [theme, setTheme] = useState('')

  let homeSwitch = () => {
    theme = 'home';
    console.log('homeSwitch');
  };

  let projectsSwitch = () => {
    theme = 'projects';
    console.log('projectsSwitch');
  };

  let techstackSwitch = () => {
    theme = 'techstack';
    console.log('techstackSwitch');
  };

  let aboutSwitch = () => {
    theme = 'about';
    console.log('aboutSwitch');
  };
  

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="topbar" id={theme}>
        <div className="wrapper">
            <a href='/' className='homelink' onClick={homeSwitch}>Home</a>
            <a href='/projects' className='portfoliolink' onClick={projectsSwitch}>Projects</a>
            <a href='/techstack' className='techstacklink' onClick={techstackSwitch}>Tech Stack</a>
            <a href='/about' className='aboutlink' onClick={aboutSwitch}>About</a>
        </div>
      </div>
    </ThemeContext.Provider>
  );
  }

export default Topbar;