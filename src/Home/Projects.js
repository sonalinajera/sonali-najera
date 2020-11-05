import React, { Component } from 'react'
import BurnToast from '../Images/burntToast.png'
import SpacedRep from '../Images/spacedRep.png'
import LabBook from '../Images/labBook.png'

export class Projects extends Component {
  render() {
    return (
      <section className='project-sections'>
        <h2>My Recent Projects</h2>
        <p>All the projects listed below have been fullstack JavaScript applications built from scratch.</p>
        <p>The front-end was built using React, and Jest. Special technologies listed when relevant.</p>
        <p>The back-end was built using Node.js, Express, PostgreSQL, Mocha and Chai libraries. Special tech listed when relevant</p>
        
        <div className='projects-group'>

        <section>
          <h3>Burnt Toast App</h3>
          <img 
          src={BurnToast} 
          style={{maxWidth:'80%'}}
          alt='A screenshot of the home page to Burnt Toast app. Clicking the images leads to the live app'></img>
          <p>
            A social platform to help individuals swap or share knowledge and skills without the need to exchange currency. This is 
            a passion project built to help people reconnect and work together.
          </p>
          <div className='a-button-div'>

          <a href='https://burnt-toast-app.vercel.app/' className='a-button'>Visit Burnt Toast app</a>
          </div>
          
         <div className='a-button-div'>
          <a href='https://github.com/thinkful-ei-quail/Burnt-Toast-Client/' className='a-button'>Visit Burnt Toast repo</a>
         </div>
        </section>
        <section>
          <h3>Language Learning App</h3>
          <img 
          src={SpacedRep} 
          style={{maxWidth:'80%'}}
          alt='A screenshot of the home page to Spaced Repetition app. Clicking the images leads to the live app'></img>
          <p>
            A Language Learning app using spaced repetition to help individuals learn different languages. 
            Currently supports introductory Japanese greetings. 
          </p>

          <p>This application uses Cypress to run end to end testing.</p>
          <div className='a-button-div'>

          <a href='https://spaced-repetition-xi.vercel.app/register' className='a-button'>Visit Spaced Repetition app</a>
          </div>
          <div className='a-button-div'>

          <a href='https://github.com/sonalinajera/SR-Client-Sonali-Justin' className='a-button'>Visit Spaced Repetition repo</a>
       </div>
        </section>
        <section>
          <h3>Mobile Lab Book App</h3>
          <img 
          src={LabBook} 
          style={{maxWidth:'80%'}}
          alt='A screenshot of the home page to Lab Book app. Clicking the images leads to the live app'></img>
          <p>
            This web application is meant to facilitate field researchers test and record during live experimentation. 
            Moving forward, this project would support additional field tools necessary to accurately record observations. 
          </p>
          <div className='a-button-div'>

          <a href='https://lab-book.vercel.app/' className='a-button'>Visit Lab Book app</a>
          </div>
          <div className='a-button-div'>

          <a href='https://github.com/sonalinajera/lab-book-client' className='a-button'>Visit Lab Book repo</a>
          </div>
        </section>
        </div>
   
        <h2 className='current-projects'>Projects I'm working on</h2>
        <p>	&#47;	&#47; I'm currently working on building out a story-based game using Twine. This game will also feature my original digital art. 
          I hope the game will be a way to think and talk about substance abuse in the LGBT+ community. 
        </p>
        <p>	&#47;	&#47; Learning Java! I decided to learn Java to diversify my skill set and practice object-oriented programming.</p>
      </section>
    )
  }
}

export default Projects
