import React, { Component } from 'react'
import EmailLogo from '../Images/email.png'
import GitHubLogo from '../Images/github.png'
import LinkedinLogo from '../Images/linkedin.png'
export class Contact extends Component {
  render() {
    return (
      <section className='contact'>
        <h2>Let's start a conversation!</h2>
        <p>I would love to connect and hear from you!</p>
        <p>Send me a message! Connect with me professionally, or just look at some of my code. I'm always happy to connect with new individuals 
          to talk about tech, code, science, or art. 
        </p>
        <div className='social-links'>
          <a href="mailto:sonalitzul@gmail.com?subject=Intrigued%20by%20your%20site"><img src={EmailLogo} width="50" alt="link to connect via email" /></a>
          <a href="https://github.com/sonalinajera" rel="noreferrer noopener" target="_blank"><img src={GitHubLogo} width="50" alt="redirects to personal github account" /></a>
          <a href="https://www.linkedin.com/in/sonali-martinez-najera" rel="noreferrer noopener" target="_blank"><img src={LinkedinLogo} width="50" alt="redirects to personal linkedin account" /></a>
        </div>
      </section>
    )
  }
}

export default Contact
