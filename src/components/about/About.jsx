import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaUniversity } from "react-icons/fa";

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaUniversity className='about__icon'/>
              <h5>Faculty</h5>
              <small>Unifanor Wyden</small><br/>
              <small>analysis and systems development</small>
              <small></small>
            </article>
          </div>
          <p>
            My name is Pedro Izaias and I am passionate about technology who decided to take the path of programming. I have knowledge in Web Development. I am currently working on personal projects. I'm currently focusing on FrontEnd technologies.
            <br />
            <br />
            Today I already understand technologies like ReactJS and Mysql.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About