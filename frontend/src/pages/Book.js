import React, { useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import reservation from 'reducers/reservation'

import Button from '../components/Button'
import Footer from '../components/Footer'
import GuestDetails from '../components/GuestDetails'
import HamburgerMenu from 'components/HamburgerMenu'
import Navbar from '../components/Navbar'

import './Book.css'

const Book = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  // const accomodation = useSelector(store => store.guestreservation.accomodation)
  // const details = useSelector(store => store.guestreservation.details)
  // console.log(accomodation)

  const history = useHistory()
  const dispatch = useDispatch()

  const onBookConfirm = () => {
    dispatch(reservation.actions.setFirstname(firstName))
    dispatch(reservation.actions.setLastname(lastName))
    dispatch(reservation.actions.setEmail(email))
    dispatch(reservation.actions.setPhonenumber(phoneNumber))

    localStorage.setItem('guestreservation', JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber
      })
    )

    history.push("/summary")
  }

  return (
    <>
      <div className="hamb-container">
        <div className="hamb-menu">
          <HamburgerMenu />
        </div>
      </div>
      <picture className="book-hero-container">
        <h1 className="book-hero-heading">HANG WITH US</h1>
        <img className="hero-image" src="/assets/images/hanging.jpg" alt="Hero background"/>
      </picture>
      <Navbar />
      <section className="book-container">
        <p className="book-welcome-text">Yeay! It's available.
          Please fill in the details and press next to continue!</p>
        <div className="book-box">
          <div className="book-details">
            <GuestDetails 
              firstName={firstName} setFirstName={setFirstName} 
              lastName={lastName} setLastName={setLastName} 
              email={email} setEmail={setEmail} 
              phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
            />
          </div>
          <Button handleClick={onBookConfirm} label="Next" />
        </div>
      </section>
      <Footer />
     </>
  )
}

export default Book
