import React from 'react'
import { RiFacebookFill } from 'react-icons/ri'
import { GrInstagram } from 'react-icons/gr'

import HamburgerMenu from './HamburgerMenu'
import Navbar from './Navbar'

import './Header.css'

const Header = () => {

  return (
    <header className="header-container">
      <div className="mob-hamb-loggo-container">
      <div className="mob-nav-container">
        <div className="loggo">
          <p className="loggo-text">CASA DE SWHEE</p>
        </div>
        <HamburgerMenu />
        </div>
      <div className="social-media-container">
        <div className="social-media-icons">
          <a className="social-media-links" href="https://www.instagram.com/"><GrInstagram /></a>
          <a className="social-media-links" href="https://www.facebook.com/"><RiFacebookFill /></a>
        </div>
      </div>  
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
