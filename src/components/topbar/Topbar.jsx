import React from 'react'
import './Topbar.scss'

export default function topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href='#home' className='homelink'>Home</a>
          <a href='#portfolio' className='portfoliolink'>Portfolio</a>
        </div>
        <div className="right"></div>
          <a href='#techstack' className='techstacklink'>Tech Stack</a>
          <a href='#contact' className='contactlink'>Contact</a>
      </div>
    </div>
  )
}
