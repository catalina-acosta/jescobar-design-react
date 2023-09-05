import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialmedia'>
        <InstagramIcon />
        <FacebookIcon />
        <LinkedinIcon />
      </div>
      <p> &copy; Jeronimo Escobar All rights reserved </p>
      <p>email: jeronimoescobarb@gmail.com</p>
    </div>
  )
}

export default Footer
