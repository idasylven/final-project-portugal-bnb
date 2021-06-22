import React from 'react'

import Map from '../components/Map'
import Footer from '../components/Footer'
import HamburgerMenu from 'components/HamburgerMenu'

import './About.css'

const About = () => {
  return (
    <>
      <div>
       <HamburgerMenu />
      </div>
      Hello from About!
      <div className="map-container">
      <Map />
      <Footer />
      </div>
    </>
  )
}

export default About
