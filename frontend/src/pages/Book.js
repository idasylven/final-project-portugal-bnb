import React, { useState }  from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import reservation from 'reducers/reservation'

import GuestDetails from '../components/GuestDetails'
import Button from '../components/Button'

import { API_URL } from '../reuseables/urls'

const Book = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const accomodation = useSelector(store => store.guestreservation.accomodation)
  const details = useSelector(store => store.guestreservation.details) // Om den klagar på undefined just nu, ta bort den
  console.log(accomodation)

  const history = useHistory()
  const dispatch = useDispatch()

  const onBookConfirm = () => {
    dispatch(reservation.actions.setFirstname(firstName))
    dispatch(reservation.actions.setLastname(lastName))
    dispatch(reservation.actions.setEmail(email))
    dispatch(reservation.actions.setPhonenumber(phoneNumber))

    history.push("/confirmation")
  }

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
  }) // Key ska heta som i server.js, value ska heta som i reservation.js
}

fetch(API_URL, options)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if (data.success) {
      batch(() => {           
        dispatch(reservation.actions.setConfirmation(data))

      })
    } else {
      dispatch(reservation.actions.setErrors(data)) // om ni vill
    }
  })

  return (
    <div>
      <GuestDetails 
        firstName={firstName} setFirstName={setFirstName} 
        lastName={lastName} setLastName={setLastName} 
        email={email} setEmail={setEmail} 
        phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
      />
      <Button handleClick={onBookConfirm} label="Book" />
    </div>
  )
}

export default Book
