import React from 'react'
import { Link } from 'react-router-dom'

import LoggoTablet from './LoggoTablet'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav-container">
      <LoggoTablet />
      <ul className="nav-box">
        <li className="nav-links"><Link to="/">HOME</Link></li>
        <li className="nav-links"><Link to="/accomodation">BOOK</Link></li>
        <li className="nav-links"><Link to="/activities">ACTIVITIES</Link></li>
        <li className="nav-links"><Link to="/about">ABOUT US</Link></li> 
      </ul>
    </nav>
  )
}

export default Navbar
