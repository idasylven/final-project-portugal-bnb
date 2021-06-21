import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoThreeBars } from 'react-icons/go'
import { RiCloseFill } from 'react-icons/ri'
import { SidebarData } from './SidebarData'

import './HamburgerMenu.css'

const HamburgerMenu = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className="hamb-navbar">
        <Link to="#" className="menu-bars">
          <GoThreeBars onClick={showSidebar}/>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <RiCloseFill />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default HamburgerMenu
