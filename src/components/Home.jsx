import React from 'react'
import styles from '../styles/Home.module.scss'
import SelfPhoto from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/thomaspic.jpg'
import FlowerBackground from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/flowerbackground.jpeg'

function Home() {
  return (

  <>

    <div className={styles.home}>

      <div id={styles.name}>
        <h2>Thomas A. Flowers, III.</h2>
      </div>

      <div id={styles.selfphoto}>
        <img src={SelfPhoto} alt="Thomas A Flowers The Third" />
      </div>

      <div id={styles.description}>
        <h3>Front-End Developer, Software Engineer, Film Photographer, Music Producer.</h3>
      </div>

    <br></br>
    <br></br>

      <div id={styles.contact}>
        <h4>
          <a href="https://github.com/TAFlowersIII">Github</a>
          <>  |  </>
          <a href="https://www.linkedin.com/in/taflowersiii/">LinkedIn</a>
          <>  |  </>
          <a href="https://docs.google.com/document/d/e/2PACX-1vQCc-3u6SDW7H8id90lxwjBEsqGw5BkXzHVoGFvT7XCGcL_ZRspApBm2X-He77RxdM3aVm2orLfS8vn/pub">Resume</a>
        </h4>
      </div>
      
    </div>

    </>
  )
}

export default Home;