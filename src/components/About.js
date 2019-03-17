import React from 'react'
import './About.css'

const About = () => (
  <div className="about">
    <div className="about-flex">
      <h1>Welcome to the about me page!</h1>
    </div>
    <div className="about-flex">
      <div>
        <p>This is where people will come to learn more about you!</p>
        <p>I'm a web developer focusing in:</p>
        <ul className="about-list">
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  </div>
)

export default About