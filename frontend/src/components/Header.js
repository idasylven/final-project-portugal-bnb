import React from 'react'
import { RiFacebookFill } from 'react-icons/ri'
import { GrInstagram } from 'react-icons/gr'

import Navbar from './Navbar'

import './Header.css'

const Header = () => {

  return (
    <header className="header-container">
      <div className="social-media-container">
        <RiFacebookFill />
        <GrInstagram />
      </div>
     <div className="header-box">
       <div className="loggo">
        <p>Casa de Shwee</p>
       </div>
     </div>
     <Navbar />
    </header>
  )
}

export default Header