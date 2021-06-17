import React from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { API_URL } from 'reuseables/urls'

import guestreservation from 'reducers/reservation'

import Button from '../components/Button'

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
      <Button handleClick={onBookConfirm} label="Book" />
    </>
  )
}

export default Summary