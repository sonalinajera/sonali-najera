import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <section>
        <h2>Let's start a conversation!</h2>
        <p>I would love to connect and hear from you!</p>
        <p>Send me an <a href="mailto:sonalitzul@gmail.com?subject=Intrigued%20by%20your%20site">email</a></p>
        <div>
        <a href="https://github.com/sonalinajera" target="_blank"><img src="" width="100" alt="github logo"/></a>
        <a href="https://www.linkedin.com/in/sonali-martinez-najera" target="_blank"><img src="" width="50" alt="linkedin logo"/></a>
      </div>
      </section>
    )
  }
}

export default Contact
