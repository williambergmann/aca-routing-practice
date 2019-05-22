import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => (
  <div className="footer">
    <p>this is the footer</p>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </ul>

  </div>
)

export default Footer