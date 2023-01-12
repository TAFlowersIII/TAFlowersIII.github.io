import React from 'react'
import Topbar from '../topbar/Topbar.jsx'
import Bottombar from '../bottombar/Bottombar.jsx'
import './Home.scss'
import SelfPhoto from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/thomaspic.jpg'
import FlowerBackground from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/flowerbackground.jpeg'

function Home() {
  return (

  <>

    {/* <Topbar /> */}

    <div className='home' id='home'>

      <div id='name'>
        <h2>Thomas A. Flowers, III.</h2>
      </div>

      <div id="selfphoto">
        <img src={SelfPhoto} alt="Thomas A Flowers The Third" />
      </div>

      <div id='description'>
        <h3>Front-End Developer, Software Engineer, Film Photographer, Music Producer.</h3>
      </div>

    <br></br>
    <br></br>

      <div id='contact'>
        <h4>
          <a href="https://github.com/TAFlowersIII">Github</a>
          <>  |  </>
          <a href="https://www.linkedin.com/in/taflowersiii/">LinkedIn</a>
          <>  |  </>
          <a href="https://docs.google.com/document/d/e/2PACX-1vTrCIfIawVDU21fxa0gT5Dh_Xp53dofM8Mymv80TJPpAPxHuMw8B-80dapOLHh5BFjMvMnjyvZ7HIgu/pub">Resume</a>
        </h4>
      </div>
      
    </div>

    {/* <Bottombar /> */}

    </>
  )
}

export default Home;