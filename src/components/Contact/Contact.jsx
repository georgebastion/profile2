import './Contact.css'
import React from 'react';

const Contact = () => {
    return (
        <div className='contactme'>
            <div className="l-side">
                <span>Get in touch</span>
                <span>Contact Me</span>

                

            </div>
            
            <form >     
                        <input type="text" name='name' placeholder='Your full Name' required/>
                        <input type="email" name='email' placeholder='Your Email' required/>
                        <textarea name="message" rows="3" placeholder='Your Message' required></textarea>
                        <button type='submit' className='button btn-primary'>Send Message </button>
                        <span className="blur3 c-blur" style={{background:"#ABF1FF94"}}></span>

            </form>
            
            
        </div>
    );
};

export default Contact;