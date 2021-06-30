import React from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { API_URL } from 'reusables/urls'

import guestreservation from 'reducers/reservation'

import Button from '../components/Button'
import Footer from '../components/Footer'
import HamburgerMenu from 'components/HamburgerMenu'
import Navbar from '../components/Navbar'

import './Summary.css'

const Summary = () => {
  const accomodation = useSelector(store => store.guestreservation.accomodation)
  const details = useSelector(store => store.guestreservation.details)

  const dispatch = useDispatch()
  const history = useHistory()

  const onBookConfirm = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        startdate: accomodation.startdate,
        enddate: accomodation.enddate, 
        roomtype: accomodation.roomtype, 
        pax: accomodation.pax, 
        firstname: details.firstname, 
        lastname: details.lastname, 
        email:details.email, 
        phonenumber: details.phonenumber 
      })
    }
    
    fetch(API_URL, options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.success) {
          batch(() => {           
            dispatch(guestreservation.actions.setConfirmation(data))

            history.push('/confirmation')

          })
        } else {
          dispatch(guestreservation.actions.setErrors(data))
        }
      })
  }

  return (
    <>
      <div className="hamb-container">
        <div className="hamb-menu">
          <HamburgerMenu />
        </div>
      </div>
      <picture className="book-hero-container">
        <h1 className="book-hero-heading">ALMOST THERE</h1>
        <img className="hero-image" src="/assets/images/surfing.jpg" alt="Hero background"/>
      </picture>
      <Navbar />
      <section className="summary-container">
        <div className="summary-wrapper">
          <h3 className="summary-heading">Check your details to confirm</h3>
            <div className="summary-details">
              <p>Check In: {new Date(accomodation.startdate).toDateString()}</p>
              <p>Check Out: {new Date(accomodation.enddate).toDateString()}</p>
              <p>Room: {accomodation.roomtype}</p>
              <p>Nr of guests: {accomodation.pax}</p>
              <p>First Name: {details.firstname}</p>
              <p>Last Name: {details.lastname}</p>
              <p>Email: {details.email}</p>
              <p>Phone Number: {details.phonenumber}</p>
            </div>
            <div className="btn-book">
              <Button  handleClick={onBookConfirm} label="Book" />
            </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Summary