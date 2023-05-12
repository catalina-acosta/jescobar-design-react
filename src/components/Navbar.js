import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className="toggleButton">
        <button></button>
      </div>
      <div className='Links'></div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar
