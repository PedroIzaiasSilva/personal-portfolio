import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { AiOutlineLinkedin } from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kz2kx89', 'template_08y81iq', form.current, 'jLjV7Lf1iMIh0fIcY')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h5>pedroizaias.dev@gmail.com</h5>
            <a href="mailto:pedroizaias1999@gmail.com" target="_blank" rel="noreferrer">
              Send a menssage
            </a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Pedro izaias silva</h5>
            <a href="https://www.linkedin.com/in/pedro-izaias-silva/" target="_blank" rel="noreferrer">
              Send a menssage
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h5>+5585997675095</h5>
            <a href="https://api.whatsapp.com/send?phone+5585997675095" target="_blank" rel="noreferrer">
              Send a menssage
            </a>
          </article>
        </div>
        { /* END OF CONTATCT OPTIONS */}
        <form ref={form} onSubmit={ sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submite' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact