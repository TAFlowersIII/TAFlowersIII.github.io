import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Topbar.module.scss'

function Topbar() {
  
  let [theme, setTheme] = useState('')
  const navigate = useNavigate();

  const homeSwitch = () => {
    navigate("/");
    setTheme("styles.home");
    // console.log('homeSwitch');
    // console.log(theme);
  };

  const projectsSwitch = () => {
    navigate("/projects");
    setTheme("styles.projects");
    // console.log('projectsSwitch');
    // console.log(theme);
  };

  const techstackSwitch = () => {
    navigate("/techstack");
    setTheme("styles.techstack");
    // console.log('techstackSwitch');
    // console.log(theme);
  };

  const aboutSwitch = () => {
    navigate("/about");
    setTheme("styles.about");
    // console.log('aboutSwitch');
    // console.log(theme);
  };
  

  return (
      <div className={styles.topbar}  id={theme}>
        <div className={styles.wrapper}>
            <a className={styles.homelink} onClick={homeSwitch}>Home</a>
            <a className={styles.portfoliolink} onClick={projectsSwitch}>Projects</a>
            <a className={styles.techstacklink} onClick={techstackSwitch}>Tech Stack</a>
            <a className={styles.aboutlink} onClick={aboutSwitch}>About</a>
        </div>
      </div>
  );
  }


export default Topbar;