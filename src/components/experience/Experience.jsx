import React from 'react'
import './experience.css'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiReact } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiTsnode } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Technical Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiTypescript className='experience__details-icon'/>
              <div>
                <h4>Typescript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML5</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiStyledcomponents className='experience__details-icon'/>
              <div>
                <h4>Styled components</h4>
              </div>
            </article>
          </div>
        </div>
        { /* END OF FRONTEND */}
        <div className="experience__backend">
        <h3>Backend and Database</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiTsnode className='experience__details-icon'/>
              <div>
                <h4>NODE.JS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
          </div>
        </div>
        {/* End of database */}
      </div>

    </section>
  )
}

export default Experience