import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is Jeronimo</h2>
        <div className='prompt'>
          <p>A designer and architect</p>
          <InstagramIcon />
          <FacebookIcon />
          <LinkedinIcon />
        </div>
      </div>
      <div className='skills'></div>
    </div>
  )
}

export default Home
