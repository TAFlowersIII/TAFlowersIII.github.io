import React from 'react'
import './Techstack.scss'
import Topbar from '../topbar/Topbar.jsx'
import Bottombar from '../bottombar/Bottombar.jsx'

import JavascriptIcon from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/javascript-icon.png'
import Python3Icon from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/python-icon.png'
import SQLIcon from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/sql-icon.png'
import MongoDBIcon from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/mongodb-icon.png'
import ExpressIcon from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/express-icon.png'
import NodeJSIcon from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/node-js-icon.png'
import ReactIcon from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/react-icon.png'
import DjangoIcon from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/django-icon.png'
import HTMLIcon from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/html-icon.png'
import CSSIcon from '/Users/melchior/VSCode_Projects/taflowers-portfolio/src/images/css-icon.png'

export default function Works() {
  return (

    <>

    {/* <Topbar /> */}

    <div className='works' id='works'>
      <h1>Tech Stack:</h1>

      <div className='javascript'>
        <img src={JavascriptIcon} alt="Javascript" width='55' height='55' />
        <h3>Javascript</h3>
      </div>

      <div className='python'>
        <img src={Python3Icon} alt="Python3" width='55' height='55' />
        <h3>Python3</h3>
      </div>
      
      <div className='sql'>
        <img src={SQLIcon} alt="SQL also known as Sequel" width='55' height='55' />
        <h3>PostgreSQL</h3>
      </div>
      
      <div className='mongodb'>
        <img src={MongoDBIcon} alt="Mongo DB" width='55' height='55' />
        <h3>MongoDB</h3>
      </div>
      
      <div className='express'>
        <img src={ExpressIcon} alt="Express" width='55' height='55' />
        <h3>Express.JS</h3>
      </div>
      
      <div className='nodejs'>
        <img src={NodeJSIcon} alt="Node JS" width='55' height='55' />
        <h3>Node.JS</h3>
      </div>
      
      <div className='react'>
        <img src={ReactIcon} alt="React" width='55' height='55' />
        <h3>React</h3>
      </div>
      
      <div className='django'>
        <img src={DjangoIcon} alt="Django" width='55' height='55' />
        <h3>Django</h3>
      </div>
      
      <div className='htmlicon'>
        <img src={HTMLIcon} alt="HTML5" width='55' height='55' />
        <h3>HTML</h3>
      </div>
      
      <div className='cssicon'>
        <img src={CSSIcon} alt="CSS3" width='55' height='55' />
        <h3>CSS/Tailwind</h3>
      </div>
      
    </div>

    {/* <Bottombar /> */}

  </>

  )
}
