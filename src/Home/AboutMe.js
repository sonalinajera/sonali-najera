import React, { Component } from 'react'

export class AboutMe extends Component {
  render() {
    return (
      <section className='about-section'>
        <div className='about-personal-section'>
        <h2>About Me</h2>
        <p> My journey began while attending UC Berkeley, where I got my degree in Molecular and Cell Biology. 
            I worked in labs for a while but found the lack of community disheartening. I moved to San Francisco and made my way through the tech field. 
            A lot of my early work was with education and tech, but I quickly realized that I needed to be on the learner side! Insert Thinkful! With their help I launched my developer career and used my powers for the good of the people.</p>
        <p> I have experience working with startups in finance and education. I pull from these experience to create and develop my apps</p>
        </div>
        <div className='about-fullstack-section'>
        <section className='about-tech-section'>
          <h2>Front-end Developer</h2>
          <p>I enjoy bringing code to life through visuals and interactive elements.</p>

          <h3>Languages</h3>
          <p>HTML, CSS, Sass, JavaScript</p>

          <h3>Development Tools</h3>
          <p>React, Jest, Cypress, VSCode, Github, Terminal, Tailwind</p>
        </section>
        <section className='about-tech-section'>
          <h2>Designer</h2>
          <p>I push myself to become a better visual designer to create colorful and impactful app flows with functionality.</p>
          <h3>Tools</h3>
          <p>Balsamiq, Figma, Pen/Paper, Color theory, Adobe suite design tools </p>
        </section>
        <section className='about-tech-section' >
          <h2>Back-end Developer</h2> 
          <p>I use my scientific background to create test-driven, organized, and controlled code.</p>
          <h3>Languages</h3>
          <p>JavaScript, SQL</p>
          <h3>Development Tools</h3>
          <p>Node.js, PostgreSQL, Asana, Jira, Mocha, Chai </p>
        </section>
        </div>
      </section>
    )
  }
}

export default AboutMe
