import React from 'react'
import "./header.scss"

function Head() {
  return (
    <div className='header'>
      <div className="logo">
        <img src="/logoinv.png" alt="" />
        <span>Inventarios</span>
      </div>
      <div className="icons">
      <div className="user">
        <img src="/1366_2000.jpg" alt="" />
        <span>Super Admin</span>

      </div>
      </div>

    </div>
  )
}

export default Head