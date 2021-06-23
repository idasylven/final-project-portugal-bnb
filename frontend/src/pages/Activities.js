import React from 'react'

import Header from 'components/Header'
import Footer from '../components/Footer'

import './Activities.css'

const Activities = () => {
  return (
    <>
      <Header />
        <div className="act-container">
          <h1 className="act-mob-heading">Activities</h1>
          <div className="act-box-left">
            <div className="act-wrapper">
              <h4 className="act-heading">Catch a wave.</h4>
              <p className="act-text">
              With the water right by it's easy to throw yourself into the waves and ride.
              We have some instructor friends that will take you on a tour and help you get the most out of the day.
              No matter experience, all are welcome!</p>
              <a className="act-link">Check them out</a>
            </div>
            <img className="act-img" src="/assets/images/surf.jpg"></img>
          </div>
          <div className="act-box-right">
            <div className="act-wrapper">
              <h4 className="act-heading">Grab a board.</h4>
              <p className="act-text">
                Just down the street we have Banana Surf Shop. Swing by, have a nice chat, steal a coffee, rent a board
                and hit the rolling ocean.</p>
                <a className="act-link">Here they are</a>
            </div>
            <img className="act-img" src="/assets/images/surfboards.jpg"></img>
          </div>
          <div className="act-box-left">
              <div className="act-wrapper">
                <h4 className="act-heading">Stroll the city.</h4>
                <p className="act-text">
                  Historical buildings, livly plazas and charismatic stores is all around our charming town. And when the legs need a rest and the bags are filled from shopping,
                  you might feel in the mood for a yummy bite and refreshing drinks. Lucky for you!
                  The options are limitless!</p>
                  <a className="act-link"> Explore the city guide here</a>
              </div>
            <img className="act-img" src="/assets/images/city-house.jpg"></img>
          </div>
          <div className="act-box-right">
            <div className="act-wrapper">
              <h4 className="act-heading">Conquer the big blue standing up.</h4>
                <p className="act-text">
                  Paddle through the rocky cliffs along the shore and experience the movment of the ocean at a slower pace.
                  Dragonflies SUP will guide you on a scenic tour, serve some snacks and
                  help you pump the boards...As that is the hardest part of it all!</p>
                  <a className="act-link"> See the different options here</a>
            </div>
            <img className="act-img" src="/assets/images/sup.jpg"></img>
          </div>
          <div className="act-box-left">
            <div className="act-wrapper">
              <h4 className="act-heading">Under the sea.</h4>
                <p className="act-text">
                  Down here the fish are happy and the unknown is colorful. 
                  Come dive with our experienced Mermaid scuba team located in the harbour. 
                  They will entertain you and teach you all the names of the fun creatures down under.</p>
                  <a className="act-link"> Let's go diving</a>
            </div>
            <img className="act-img" src="/assets/images/diving.jpg"></img>
          </div>
          <div className="act-box-right">
            <div className="act-wrapper">
              <h4 className="act-heading">The line where the sky meets the sea.</h4>
                <p className="act-text">
                  Set the bearings towards the horizon and challenge the winds to move you forward.
                  Learn how to master the sails or just join for a wild ride.</p>
                  <a className="act-link"> See the Stormy Sailing club here </a>
            </div>
            <img className="act-img" src="/assets/images/sail.jpg"></img>
          </div>
          <div className="act-box-left">
            <div className="act-wrapper">
              <h4 className="act-heading">Haiking the heights.</h4>
                <p className="act-text">
                  By the shore line there are heaps of nice trails to explore. Get those boots on and keep walikng. 
                  Don't forgett to bring the camera for that kodak moment!</p>
                  <a className="act-link"> Haiking maps & guides </a>
            </div>
            <img className="act-img" src="/assets/images/cliffs.jpg"></img>
          </div>
          <div className="act-box-right">
              <div className="act-wrapper">
                <h4 className="act-heading">Or just relish in our amazing beaches.</h4>
                <p className="act-text"> 
                  Pack that towel, prep with sunblock, bring some tasty snacks
                  and just relax...</p>
                  <a className="act-link">Bust a beach here</a>
              </div>
            <img className="act-img" src="/assets/images/beach.jpg"></img>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Activities
