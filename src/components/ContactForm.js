import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/ContactForm.css"

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lmtd4hn', 'template_0ijvi5b', form.current, 'CT5blvDack2_s7xqK')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
  );
}
export default ContactForm;
