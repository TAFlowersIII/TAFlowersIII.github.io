import React from 'react'
import './Topbar.scss'

export default function topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
          <a href='#home' className='homelink'>Home</a>
          <a href='#portfolio' className='portfoliolink'>Portfolio</a>
          <a href='#techstack' className='techstacklink'>Tech Stack</a>
          <a href='#about' className='aboutlink'>About</a>
      </div>
    </div>
  )
}
