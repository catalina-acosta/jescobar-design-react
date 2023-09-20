import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <p> &copy; Jeronimo Escobar All rights reserved </p>

      <div className='socialmedia'>
        <a
          href='https://instagram.com/jescobar.design?igshid=NTc4MTIwNjQ2YQ=='
          target='_blank'
          rel='noopener noreferrer'
        >
          <InstagramIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/jeronimo-escobar-barreto-3075728a/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedInIcon />
        </a>
      </div>
      <p className='email'>email: jeronimoescobarb@gmail.com</p>
    </div>
  )
}

export default Footer
