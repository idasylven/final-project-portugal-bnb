import React from 'react'
import { RiFacebookFill } from 'react-icons/ri'
import { GrInstagram } from 'react-icons/gr'
import { GoThreeBars } from 'react-icons/go'

import HamburgerMenu from './HamburgerMenu'
import Navbar from './Navbar'

import './Header.css'

const Header = () => {

  return (
    <header className="header-container">
      <div className="mob-nav-container">
        <p className="loggo">Casa de Shwee</p>
        <HamburgerMenu />
      </div>
        <picture>
          <source srcSet="/assets/images/terrace-mobile.jpg" media="(max-width: 767px)"/>
          <source srcSet="/assets/images/terrace-tablet.jpg" media="(max-width: 1024px)"/>
          <img className="hero-image" src="/assets/images/terrace-desktop.jpg" alt="Hero background"/>
        </picture>
     <Navbar />
    </header>
  )
}

export default Header

//   <div className="social-media-container">
// <RiFacebookFill />
// <GrInstagram />
// </div>
// <div className="header-box">
// <div className="loggo">
// <p>Casa de Shwee</p>
// </div>
// </div>

//   <GoThreeBars />