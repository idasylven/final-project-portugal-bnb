import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { GoThreeBars } from 'react-icons/go'


const Navbar = () => {
  const [state, setState] = useState({
    isOpen:false
  })

  
handleToggle = () => {
    setState({isOpen:!state.isOpen})
  }

  return (
    <nav className="navbar">
      <div className= "nav-center">
        <div className= "nav-header">
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <GoThreeBars />
          </button>
        
        </div>
      </div>
    </nav>
  )
}

export default Navbar