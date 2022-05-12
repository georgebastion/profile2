import './Contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const [done, setDone]=useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mud1jbg', 'template_7uval9u', form.current, 'pjPenMLRWAHv3ZFRB')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className='contactme'>
            <div className="l-side">
                <span>Get in touch</span>
                <span>Contact Me</span>

                

            </div>
            
            <form ref={form} onSubmit={sendEmail}>     
                        <input type="text" name='name' placeholder='Your full Name' required/>
                        <input type="email" name='email' placeholder='Your Email' required/>
                        <textarea name="message" rows="3" placeholder='Your Message' required></textarea>
                        <button type='submit' className='button btn-primary'>Send Message </button>
                        <span className="blur3 c-blur" style={{background:"var(--purple)"}}></span>
                        <span>{done && "Thanks for contacting me!"}</span>

            </form>
            
            
        </div>
    );
};

export default Contact;