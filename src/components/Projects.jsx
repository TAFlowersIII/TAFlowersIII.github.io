// import React from 'react'

import styles from "../styles/Projects.module.scss"

import SimonSaysGIF from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/simonsays-video.gif'
import BurgundySequencerGIF from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/burgundy-sequencer-video.gif'
import NVPGIF from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/nostalgicvideopasture-video.gif'
import PodCatsGIF from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/podcats-video.gif'



export default function Projects() {
  return (

  <>
    
    {/* ****  Card 1:  **** */}

    <div className={styles.projects}>

      <div id={styles.header}><p>Projects:</p></div>
      
      <div className={styles.card1}>
        <br></br>
        <img src={SimonSaysGIF} alt="Simon Says Memory Game And Drum Machine" />

        <div className={styles.card1container}>
          <h2>"Simon Says Sampler"</h2>
          <h3>HTML, CSS, JavaScript</h3>
          <br></br>
          <h4>A web application drum machine modeled in the style of an AKAI MPC. Use your keyboard to play a beat, or try a "Simon Says"-esque rhythmic memory game.</h4>
          <br></br>
          <a href='https://github.com/KhakiSuitValentino/Unit1-Project1'>View On Github</a> <span> | </span> <a href='https://taflowersiii.github.io/Unit1-Project1/'>View Deployment</a>
        </div>

      </div>

      <div className={styles.card2}>

        <div className={styles.card2container}>

          <img id={styles.card2img} src={NVPGIF} alt="Nostalgic Video Pasture"/>

          <h2 id={styles.card2h2}>"Nostalgic Video Pasture"</h2>

          <h3 id={styles.card2h3}>HTML, CSS, JS, EJS, PostgresQL, Express</h3>

          <h4 id={styles.card2h4}>A community collection of nostalgic videos from Youtube. Users can share their favorite Youtube videos that invoke a sense of nostalgia.</h4>

          <div id={styles.card2links}>
            <a href='https://github.com/KhakiSuitValentino/NostalgicVideoPasture'>View on Github</a>
              <span> | </span>
            <a href='https://www.videotape-pasture.fly.dev/'>View Deployment</a>
          </div>
          
        </div>

      </div>

      <div className={styles.card3}>
        <br></br>
        <img src={PodCatsGIF} alt="Pod Cats" width="140" height="75"/>

        <div className={styles.card3container}>
          <h2>"Pod Cats"</h2>
          <h3>React, Axios, Tailwind, MongoDB, Node, Express, Rowdy</h3>
          <br></br>
          <h3>"Pod Cats" allows users to call The Cat API to find, save, and share cute cat images. This was made in collaboration with other students at General Assembly Immersive Bootcamp.</h3>
          <br></br>
          <a href='https://github.com/syorn96/pod-cats'>View on Github</a>
          <span> | </span>
          <a href='https://silver-beignet-215e62.netlify.app/cats'>View Deployment</a>
        </div>

      </div>
      
      <div className={styles.card4}>
        <br></br>
      <img src={BurgundySequencerGIF} alt="Burgundy Sequencer Music Program" width="140" height="75"/>
        <div className={styles.card4container}>
          <h2>"Burgundy Sequencer"</h2>
          <h3>Python, PyGame</h3>
          <br></br>
          <h3>A musical step sequencer in the style of Digital Audio Workstation programs such as FL Studio. Users can create their own rhythms and instrumentals.</h3>
          <br></br>
          <a href='https://github.com/KhakiSuitValentino/BurgundySequencer'>View on Github</a>
          <span> | </span>
          <a href='https://silver-beignet-215e62.netlify.app/cats'>View Deployment</a>
        </div>
      </div>
    </div>

    </>
  )
}
