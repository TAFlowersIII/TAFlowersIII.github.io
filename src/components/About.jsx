import React from 'react'
import styles from "../styles/About.module.scss"

function About() {
  return (

  <>

    <div className={styles.about}>
      
      <div id={styles.header}>
        <p>About Thomas A. Flowers III:</p>
      </div>
      
      <div id={styles.photo}>
        {/* Note: Photo loaded in .scss as background. */}
      </div>

      <div id={styles.text}>

        <h4>I was born in New York City, and am currently living in Atlanta, Georgia. I've spent many years living in the Deep South, Northeast, Midwest and Far West USA, in urban, suburban, and rural environments. I believe this pan-American background helps me relate to Americans of all backgrounds and walks of life.</h4>

      <br></br>
        <h4>I have produced acoustic and electronic music, and ran a special event DJ company in Atlanta, for many years. I am obsessed with technology that brings creative inspiration to humans.</h4>

      <br></br>

        <h4>As a deep lover of both the natural world and the technological world, I regularly philosophize about the state of humanity's connection to technology, how this connection helps and hinders humanity, and what I can do as a software engineer to help the natural world and the technological world coexist harmoniously. I believe humanity will thrive if it figures out how to healthily merge these two worlds.</h4>

      </div>

    </div>

    </>
    
  )
}

export default About;
