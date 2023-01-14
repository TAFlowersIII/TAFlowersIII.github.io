import React from 'react'
import styles from "../styles/About.module.scss"

import AboutPhoto from "../images/aboutme-photo.jpeg"

function About() {
  return (

  <>

    <div className={styles.about}>
      
      <div id={styles.header}>
        <p>About Thomas A. Flowers III:</p>
      </div>
      
      <div id={styles.photo}>
        <img src={AboutPhoto} alt="Thomas at a beachside wedding in Pompano Beach, Florida" />
      </div>

      <div id={styles.text}>

        <h4>
          I am thrilled to have discovered the creative world of software programming and development. As I highly value my creative output, so too do I value opportunities to exercise creativity. I find pleasure in creating an application from scratch, or attempting to solve problems in a creative way, or discussing new ideas and possibilities with others in the field.
        </h4>
        <br></br>
        <h4>In my free time, away from work, I greatly enjoy combining the creative expression of programming with other creative expressions of mine, such as music and photography. As I rely heavily on technology for my creative expressions, I am excited to be a part of an industry that creates applications that can inspire more creativity in others. </h4>

      </div>

    </div>

    </>
    
  )
}

export default About;
