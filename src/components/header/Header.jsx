import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from '../header/HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container" id='home'>
        <h5>Hello I'm 👋</h5>
        <h1>Pedro Izaias</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        
        <a href="#contact" className='scroll__down'>Contact Me</a>
      </div>
    </header>
  )
}

export default Header