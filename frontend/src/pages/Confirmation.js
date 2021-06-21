import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Confirmation = () => {
  const confirmation = useSelector(store => store.guestreservation.confirmation)

  const history = useHistory()

  useEffect(() => {
    if (!confirmation) {
      history.push('/accomodation')
    }
  },[])

if (confirmation) {
  return (
    <div>
     Hello from Confirmation!
     startdate: {confirmation.accomodation.startdate}
     enddate: {confirmation.accomodation.enddate}
     roomtype: {confirmation.accomodation.roomtype}
     number of guests: {confirmation.accomodation.pax}
     first name: {confirmation.details.firstname}
     last name: {confirmation.details.lastname}
     email: {confirmation.details.email}
     phone number: {confirmation.details.phonenumber}
   </div>
 )
} else {
  return null
}
}

export default Confirmation