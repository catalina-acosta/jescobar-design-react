import React from 'react'
import "../styles/Contact.css"
import ContactForm from '../components/ContactForm'
import Sk from '../assets/Brasilia/_7-Brasilia-ske.png'

function Contact() {
  return (
    <div className='contact'>
      <h1>Get in touch!</h1>
      <div className='contact-container'>
        <img src={Sk} alt=''/>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact
