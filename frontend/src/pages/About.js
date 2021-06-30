import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Map from '../components/Map'

import './About.css'

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
       <h1 className="about-mob-heading">About Us</h1>
        <div className="about-box-left">
          <div className="about-wrapper">
            <article className="about-text">
              <p>Longing for freedom and adventures was the spark of building my home to share. 
              After years of traveling and living abroad I ended upp back in Sweden and gave the “normal life” a shot. 
              Just let me put it this way..  It was not my cup of tea!!</p>
              <p>So still wanting a base to be grounded but with more flexibility and more colorful culture to enjoy 
              I cherished the thought of heading out and about again.
              This time I fell for Portugal and it trigged my imagination of creating a place to own and share 
              with other adventure searching folks.</p>
              <p>Now I stay here for the summer months and take care of the house and guests, 
              when the winter comes, I leave for some adventure of my own, and leave the house in good hands of my partners to
              keep caring for the guests.</p>
            </article>
          </div> 
          <img className="about-img" src="/assets/images/free.jpg" alt="girl in sunset"></img>
        </div>
        <div className="about-box-right">
          <div className="about-wrapper">
            <article className="about-text">
              <p>Our value is to keep exploring, be kind and share the fun.</p>
              <p>We have 4 rooms, Serenity Boost, Leafy Green, Ocean Flow and Forest Feels. 
              When you step in you will be embraced by their spiritful characters.</p>
              <p>A nice Healthy and fresh breakfast will be served so you just can get out the door and be ready for a day of adventure.
              When you come back, head up to our lovely terrace where you can soak up the sunset over the beautiful roof-tops of the city, 
              while the sent of fresh grilled food sweeps from the barbeque and some tasty cold drinks will come in handy in the warmth.</p>
              <p>We wish you a big warm welcome to Casa de Shwee!</p>
            </article>
          </div>
          <img className="about-img" src="/assets/images/ocean.jpg" alt="Cliffs and ocean"></img>
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
