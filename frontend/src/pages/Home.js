import React from 'react'

import './Home.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
      <Header />
      <section className="home-container">
        <div className="welcome-text-wrapper">
          <div className="welcome-text">
            <p>
              <span className="loggo-name">Casa de Shwee</span> 
              welcomes you to the gem of Portugal.
              Here the vibes are friendly and  the people smile a lot.
            </p>
            <p>
              Check in and revel in a good time, check out with a refilled soul of happiness.
              </p>
              <p>
                Pick an experience to do and  choose a room
                that connects with you!
              </p>
          </div>
        </div>
        <img className="pink-street-img" src="/assets/images/pink-street.jpg"></img>
      </section>
      <Footer />
    </main>
  )
}

export default Home
