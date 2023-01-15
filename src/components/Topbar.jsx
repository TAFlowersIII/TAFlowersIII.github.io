import React from 'react'
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Topbar.module.scss'

export const ThemeContext = createContext(null);

function Topbar() {
  
  let [theme, setTheme] = useState('')
  const navigate = useNavigate();

  let homeSwitch = () => {
    theme = 'home';
    navigate("/");
    console.log('homeSwitch');
  };

  let projectsSwitch = () => {
    theme = 'projects';
    navigate("/projects");
    console.log('projectsSwitch');
  };

  let techstackSwitch = () => {
    theme = 'techstack';
    navigate("/techstack");
    console.log('techstackSwitch');
  };

  let aboutSwitch = () => {
    theme = 'about';
    navigate("/about");
    console.log('aboutSwitch');
  };
  

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={styles.topbar} id={theme}>
        <div className={styles.wrapper}>
            <a className={styles.homelink} onClick={homeSwitch}>Home</a>
            <a className={styles.portfoliolink} onClick={projectsSwitch}>Projects</a>
            <a className={styles.techstacklink} onClick={techstackSwitch}>Tech Stack</a>
            <a className={styles.aboutlink} onClick={aboutSwitch}>About</a>
        </div>
      </div>
    </ThemeContext.Provider>
  );
  }

export default Topbar;