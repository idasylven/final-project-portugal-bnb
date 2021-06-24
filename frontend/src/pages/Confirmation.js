import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Footer from '../components/Footer'

import './Confirmation.css'

const Confirmation = () => {
  const confirmation = useSelector(store => store.guestreservation.confirmation)

  const history = useHistory()

  useEffect(() => {
    if (!confirmation) {
      history.push('/accomodation')
    }
  },[confirmation, history]) //Remove from array of dependecy?

if (confirmation) {
  return (
    <>
    <picture className="room-hero-container">
         <h1 className="room-hero-heading">WELCOME</h1>
          <source srcSet="/assets/images/cactus.jpg" media="(max-width: 767px)"/>
          <source srcSet="/assets/images/cactus.jpg" media="(max-width: 1024px)"/>
          <img className="hero-image" src="/assets/images/cactus.jpg" alt="Hero background"/>
        </picture>
    <section className="conf-container">  
    <div className="conf-wrapper">
    <h3 className="conf-heading">Pack your bags and hit the road, we are waiting for you!</h3>
   <div className="conf-details">
     <p>Check In: {new Date (confirmation.accomodation.startdate).toDateString()}</p>
     <p>Check Out: {new Date (confirmation.accomodation.enddate).toDateString()}</p>
     <p>Room: {confirmation.accomodation.roomtype}</p>
     <p>Nr of guests: {confirmation.accomodation.pax}</p>
     <p>First Name: {confirmation.details.firstname}</p>
     <p>Last Name: {confirmation.details.lastname}</p>
     <p>Email: {confirmation.details.email}</p>
     <p>Phone Number: {confirmation.details.phonenumber}</p>
    </div>
   </div> 
   </section> 
   <Footer />
   </>
 )
} else {
  return null
}
}

export default Confirmation