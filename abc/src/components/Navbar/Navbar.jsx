import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='main' style={{display:"flex"}}>
      <div className="left">
        <h1 className='logo_text'>Navbar</h1>
      </div>
      <div className="right">
        <ul style={{display:"flex", justifyContent:"space-between", gap:"30px"}}>
          <Link to={'/'}><li>about</li></Link>
          <Link to={'/blog'}><li>blog</li></Link>
          <Link to={'/contact'}><li>Contact</li></Link>
        </ul>
      </div>

    </div>
  )
}

export default Navbar