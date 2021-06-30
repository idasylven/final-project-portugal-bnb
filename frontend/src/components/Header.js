import React from 'react'

import HamburgerMenu from './HamburgerMenu'
import Loggo from './Loggo'
import Navbar from './Navbar'
import SocialMedia from './SocialMedia'

import './Header.css'

const Header = () => {

  return (
    <header className="header-container">
      <div className="header-items-container">
        <div className="mob-hamb-loggo-container">
          <Loggo />
          <HamburgerMenu />
          <div className="some-container">
            <SocialMedia />
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
