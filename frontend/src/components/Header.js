import React from 'react'

import Navbar from './Navbar'

import './Header.css'

const Header = () => {

  return (
    <header className="header-container">
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

