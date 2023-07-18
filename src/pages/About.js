import React from 'react'
import "../styles/About.css"
import aboutImg from "../assets/aboutImg.jpg"

function About() {
  return (
    <div className='about'>
      <p>A curious and investigative character, combined with good analytical ability has taken me to develop a wide range of design skills. This allows me to tackle projects in a transversal way, approaching problems from different scales and points of view resulting in clever solutions.</p>
      <img src={aboutImg} style={{width: '300px'}}></img>
    </div>
  )
}

export default About
