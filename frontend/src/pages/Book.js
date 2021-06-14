import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import GuestDetails from '../components/GuestDetails'
import Button from '../components/Button'

const Book = () => {

  const accomodation = useSelector(store => store.guestreservation.accomodation)
  const details = useSelector(store => store.guestreservation.details) // Om den klagar på undefined just nu, ta bort den
  console.log(accomodation)

  const history = useHistory()

  const onBookConfirm = () => {
    
    history.push("/confirmation")
  }

  return (
    <div>
      <GuestDetails />
      <Button handleClick={onBookConfirm} label="Book" />
    </div>
  )
}

export default Book

// Add function to button

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ roomType: accomodation.roomtype, osv }) // Key ska heta som i server.js, value ska heta som i reservation.js
// }

// fetch('http://localhost:8080/reservation', options)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     if (data.success) {
//       batch(() => {           
//         dispatch(reservation.actions.setConfirmation(data))

//       })
//     } else {
//       dispatch(reservation.actions.setErrors(data)) // om ni vill
//     }
//   })