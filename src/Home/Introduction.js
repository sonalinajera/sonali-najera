import React from 'react'
import selfie from '../Images/selfie.png'

function Introduction() {
    return(
        <div className="intro">
            <h1>Welcome, I'm Sonali</h1>
            <div>
                <img src={selfie} alt='cartoon animation of myself weather a rose in my hair and head cover'></img>
            </div>
            <h2>Quick Intro</h2>
            <ul>
                <li>// I'm a Californian Full Stack Developer </li>
                <li>// Currently work with: FullStack JS, React, Node.js</li>
                <li>// I'm a transgender person of color and I use they/them pronouns</li>
                <li>// I enjoy working with queer non-profits to help meet their development needs</li>
                <li>// I'm living the California Dream from San Francisco, but I am more than happy to work remotely for you!</li>
            </ul>
        </div>
    )
}

export default Introduction