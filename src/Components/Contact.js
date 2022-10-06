import React from 'react';
import emailjs from '@emailjs/browser';
import './CSS/Contact.css';

export default function Contact() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_y5ul7bm', 'template_05978q4', e.target, 'user_xhaQorLFJ6D5QTI6ONumF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        document.getElementById("form").reset();
    };

    
      return (
        <div className='contact-main-container'>
            <div className='contact-header'>Contact Me</div>
            <span className='contact-words'>Let's get in touch.</span>
            <form id='form' className='contact-form' onSubmit={sendEmail}>
                <input className='form-item' placeholder='Name' type="text" name="from_fullname" /><br/>
                <input  className='form-item' placeholder='Email' type="email" name="reply_to_email" /><br/>
                <input  className='form-item' placeholder='Phone' type="phone" name="phone" /><br/>
                <textarea  className='form-item' placeholder='Message'  name="message" rows='5'/><br/>
                <input id='contact-button' type="submit" value="Send" /> 
            </form>
        </div>
      )  
    }





