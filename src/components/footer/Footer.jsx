import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="home" className='footer__logo'>Pedro</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/pedro-izaias-silva/"><BsLinkedin/></a>
        <a href="https://github.com/PedroIzaiasSilva"><BsGithub/></a>
        <a href="https://wa.me/5585997675095"><BsWhatsapp/></a>
      </div>

      <div className="footer__copyright">
        <small>Pedro Izaias. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer