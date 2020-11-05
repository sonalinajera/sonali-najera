import React, { Component } from 'react'
import selfie from '../Images/selfie.png'

export class AboutMeBonus extends Component {
  render() {
    return (
      <div className="intro">
      <h1>Hello, again!</h1>
      <div>
          <img
          className='intro-portrait'
          src={selfie} 
          alt='cartoon animation of myself weather a rose in my hair and head cover'/>
      </div>
      <h2>Thank you for your interest in who I am.</h2>
      <p>Below you can read about my technical skills.</p>
  </div>
    )
  }
}

export default AboutMeBonus
