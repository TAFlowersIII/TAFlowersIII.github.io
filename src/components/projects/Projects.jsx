import React from 'react'
import SimonSaysGIF from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/simonsays-video.gif'
import BurgundySequencerGIF from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/burgundy-sequencer-video.gif'
import NVPGIF from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/nostalgicvideopasture-video.gif'
import PodCatsGIF from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/podcats-video.gif'
import "./Projects.scss"

export default function Projects() {
  return (
    <div className='projects' id='projects'>
      <div id='h1'><h1>Projects</h1></div>
      
      <div className='card1'>
        <br></br>
        <img src={SimonSaysGIF} alt="Simon Says Memory Game And Drum Machine" width="140" height="75"/>

        <div className='card1-container'>
          <h2>"Simon Says Sampler"</h2>
          <h3>HTML, CSS, Vanilla JS</h3>
          <br></br>
          <h3>A web application drum machine modeled in the style of an AKAI MPC. Use your keyboard to play a beat, or try a "Simon Says" style memory game.</h3>
          <br></br>
          <a href='https://github.com/KhakiSuitValentino/Unit1-Project1'>View On Github</a>
          <br></br>
          <a href='https://taflowersiii.github.io/Unit1-Project1/'>View Deployment</a>
        </div>

      </div>

      <div className='card2'>
        <br></br>
        <img src={NVPGIF} alt="Nostalgic Video Pasture" width="140" height="75"/>

        <div className='card2-container'>
          <h2>"Videotape Pasture"</h2>
          <h3>HTML, CSS, JS, EJS, PostgresQL, Express</h3>
          <br></br>
          <h3>A community collection of nostalgic videos from Youtube. Users can share their favorite Youtube videos that invoke a sense of nostalgia.</h3>
          <br></br>
          <br></br>
          <a href='https://github.com/KhakiSuitValentino/NostalgicVideoPasture'>View on Github</a>
          <br></br>
          <a href='https://www.videotape-pasture.fly.dev/'>View Deployment</a>
          
        </div>

      </div>

      <div className='card3'>
        <br></br>
        <img src={PodCatsGIF} alt="Pod Cats" width="140" height="75"/>

        <div className='card3-container'>
          <h2>"Pod Cats"</h2>
          <h3>React, Axios, Tailwind, MongoDB, Node, Express, Rowdy</h3>
          <br></br>
          <h3>"Pod Cats" allows users to call The Cat API to find, save, and share cute cat images. This was made in collaboration with other students at General Assembly Immersive Bootcamp.</h3>
          <br></br>
          <a href='https://github.com/syorn96/pod-cats'>View on Github</a>
          <br></br>
          <a href='https://silver-beignet-215e62.netlify.app/cats'>View Deployment</a>
        </div>

      </div>
      
      <div className='card4'>
        <br></br>
      <img src={BurgundySequencerGIF} alt="Burgundy Sequencer Music Program" width="140" height="75"/>
        <div className='card4-container'>
          <h2>"Burgundy Sequencer"</h2>
          <h3>Python, PyGame</h3>
          <br></br>
          <h3>A musical step sequencer in the style of Digital Audio Workstation programs such as FL Studio. Users can create their own rhythms and instrumentals.</h3>
          <br></br>
          <a href='https://github.com/KhakiSuitValentino/BurgundySequencer'>View on Github</a>
          <br></br>
          <a href='https://silver-beignet-215e62.netlify.app/cats'>View Deployment</a>
        </div>
      </div>
    </div>
  )
}
