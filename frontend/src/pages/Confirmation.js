import React from 'react'
import { useSelector } from 'react-redux'

const Confirmation = () => {
  const accomodation = useSelector(store => store.guestreservation.accomodation)
  const details = useSelector(store => store.guestreservation.details)

  return (
    <div>
      Hello from Confirmation!
      startdate: {new Date(accomodation.startdate).toDateString()}
      enddate: {new Date(accomodation.enddate).toDateString()}
      roomtype: {accomodation.roomtype}
      number of guests: {accomodation.pax}
      first name: {details.firstname}
      last name: {details.lastname}
      email: {details.email}
      phone number: {details.phonenumber}
    </div>
  )
}

export default Confirmation