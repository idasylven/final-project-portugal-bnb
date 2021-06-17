import React, { useState }  from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import reservation from 'reducers/reservation'

import GuestDetails from '../components/GuestDetails'
import Button from '../components/Button'

const Book = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const accomodation = useSelector(store => store.guestreservation.accomodation)
  const details = useSelector(store => store.guestreservation.details)
  console.log(accomodation)

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
    <div>
      <GuestDetails 
        firstName={firstName} setFirstName={setFirstName} 
        lastName={lastName} setLastName={setLastName} 
        email={email} setEmail={setEmail} 
        phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
      />
      <Button handleClick={onBookConfirm} label="See summary" />
    </div>
  )
}

export default Book
