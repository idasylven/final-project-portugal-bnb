import React from 'react'

import Map from '../components/Map'
import Footer from '../components/Footer'
import Header from '../components/Header'

import './About.css'

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-box-left">
          <p className="about-text">SUNSET is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <img className="about-img" src="/assets/images/free.jpg"></img>
        </div>
        <div className="about-box-right">
          <p className="about-text">OCEAN Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <img className="about-img" src="/assets/images/ocean.jpg"></img>
        </div>
      </div>
      <div className="map-container">
      <Map />
      </div>
      <Footer />
    </>
  )
}

export default About
