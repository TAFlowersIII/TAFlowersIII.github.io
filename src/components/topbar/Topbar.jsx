import React from 'react'
import './Topbar.scss'

export default function topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
          <a href='/' className='homelink'>Home</a>
          <a href='/projects' className='portfoliolink'>Projects</a>
          <a href='/techstack' className='techstacklink'>Tech Stack</a>
          <a href='/about' className='aboutlink'>About</a>
      </div>
    </div>
  )
}
