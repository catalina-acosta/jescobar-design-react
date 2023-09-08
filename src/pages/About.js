import React from 'react'
import "../styles/About.css"
import aboutImg from "../assets/aboutImg.jpg"

function About() {
  return (
    <div className='about'>
      <h1>Architect, Designer, <span>Creative Problem Solver.</span></h1>
      <p>“A curious and investigative character, combined with good analytical ability has allowed me to develop a wide range of design skills. This allows me to tackle projects in a transversal way, approaching problems from different scales and points of view resulting in clever solutions. “</p>
      <p>Architect graduated from Universidad Javeriana (Colombia) with a masters in Product Design from the Nouva Accademia di Belle Arti (NABA) Milano.He has developed his work in countries such as Colombia, Italy, USA, Switzerland and Spain, in different fields such as architecture, interior, strategic and product design.</p>
      <img src={aboutImg} style={{width: '300px'}}></img>
    </div>
  )
}

export default About
