import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "New project coming soon",
    github: "https://github.com/PedroIzaiasSilva",
    demo: 'https://github.com/PedroIzaiasSilva'
  },
  {
    id: 2,
    image: IMG2,
    title: "New project coming soon",
    github: "https://github.com/PedroIzaiasSilva",
    demo: 'https://github.com/PedroIzaiasSilva'
  },
  {
    id: 3,
    image: IMG3,
    title: "New project coming soon",
    github: "https://github.com/PedroIzaiasSilva",
    demo: 'https://github.com/PedroIzaiasSilva'
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => { 
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
              <div className="portfolio__item-cta">
                  <a href={github}className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary offButton' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio