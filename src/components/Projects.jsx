// import React from 'react'

import styles from "../styles/Projects.module.scss"

import SimonSaysGIF from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/simonsays-video.gif'
import BurgundySequencerGIF from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/burgundy-sequencer-video.gif'
import NVPGIF from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/nostalgicvideopasture-video.gif'
import PodCatsGIF from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/podcats-video.gif'



export default function Projects() {
  return (

  <>
    
    <div className={styles.projects}>

      <div id={styles.header}><p>Projects:</p></div>
      

    {/* ----- CARD 1 ----- */}

      <div className={styles.card1}>

        <div className={styles.card1container}>

          <img id={styles.card1img} src={SimonSaysGIF} alt="Simon Says Memory Game And Drum Machine" />

          <h2 id={styles.card1title}>"Simon Says Sampler"</h2>

          <h3 id={styles.card1stack}>HTML, CSS, JavaScript</h3>

          <h4 id={styles.card1description}>A web application drum machine modeled in the style of an AKAI MPC. Use your keyboard to play a beat, or try a "Simon Says"-esque rhythmic memory game.</h4>

          <div id={styles.card1links}>
            <a href='https://github.com/KhakiSuitValentino/Unit1-Project1'>View On Github</a> <span> | </span> <a href='https://taflowersiii.github.io/Unit1-Project1/'>View Deployment</a>
          </div>
        </div>

      </div>


      {/* ----- CARD 2 ----- */}

      <div className={styles.card2}>

        <div className={styles.card2container}>

          <img id={styles.card2img} src={NVPGIF} alt="Nostalgic Video Pasture"/>

          <h2 id={styles.card2title}>"Nostalgic Video Pasture"</h2>

          <h3 id={styles.card2stack}>HTML, CSS, JS, EJS, PostgresQL, Express</h3>

          <h4 id={styles.card2description}>A community collection of nostalgic videos from Youtube. Users can share their favorite Youtube videos that invoke a sense of nostalgia.</h4>

          <div id={styles.card2links}>
            <a href='https://github.com/KhakiSuitValentino/NostalgicVideoPasture'>View on Github</a>
              <span> | </span>
            <a href='https://www.videotape-pasture.fly.dev/'>View Deployment</a>
          </div>
          
        </div>

      </div>

    {/* ------ CARD 3: ------ */}

      <div className={styles.card3}>

        <div className={styles.card3container}>

          <img id={styles.card3img} src={PodCatsGIF} alt="Pod Cats" />

          <h2 id={styles.card3title}>"Pod Cats"</h2>

          <h3 id={styles.card3stack}>React, Axios, Tailwind, MongoDB, Node, Express, Rowdy</h3>

          <h4 id={styles.card3description}>"Pod Cats" allows users to call The Cat API to find, save, and share cute cat images. Made in collaboration with other students at General Assembly Immersive Bootcamp.</h4>
          
          <div id={styles.card3links}>
            <a href='https://github.com/syorn96/pod-cats'>View on Github</a>
              <span> | </span>
            <a href='https://silver-beignet-215e62.netlify.app/cats'>View Deployment</a>
          </div>
        </div>

      </div>
      

    {/* ------- CARD 4: ------- */}

      <div className={styles.card4}>
        
      
        <div className={styles.card4container}>

          <img id={styles.card4img} src={BurgundySequencerGIF} alt="Burgundy Sequencer Music Program" />

          <h2 id={styles.card4title}>"Burgundy Sequencer"</h2>

          <h3 id={styles.card4stack}>Python, PyGame</h3>
          
          <h4 id={styles.card4description}>A musical step sequencer in the style of Digital Audio Workstation programs such as FL Studio. Users can create their own rhythms and instrumentals.</h4>
          
          <div id={styles.card4links}>
            <a href='https://github.com/KhakiSuitValentino/BurgundySequencer'>View on Github</a>
              <span> | </span>
            <a href='https://silver-beignet-215e62.netlify.app/cats'>View Deployment</a>
          </div>

        </div>

      </div>

    </div>

    </>
  )
}
