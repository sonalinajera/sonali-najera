import React from 'react'
import selfie from '../Images/selfie.png'

function Introduction() {
    return(
        <div className="intro">
            <h1>Welcome, I'm Sonali!</h1>
            <div>
                <img
                className='intro-portrait'
                src={selfie} 
                alt='cartoon animation of myself weather a rose in my hair and head cover'/>
            </div>
            <h2>Quick Intro</h2>
            <ul>
                <li>&#47;&#47; I'm a Californian Full Stack Developer </li>
                <li>&#47;&#47; Currently work with: FullStack JS, React, Node.js</li>
                <li>&#47;&#47; I'm a transgender person of color and I use they/them pronouns</li>
                <li>&#47;&#47; I enjoy working with queer non-profits to help meet their development needs</li>
                <li>&#47;&#47; I'm living the California Dream from San Francisco, but I am more than happy to work remotely for you!</li>
            </ul>
        </div>
    )
}

export default Introduction