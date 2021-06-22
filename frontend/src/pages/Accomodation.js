import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import reservation from 'reducers/reservation'

import Datepicker from 'components/Datepicker'
import DropdownRoom from '../components/DropdownRoom'
import DropdownPax from '../components/DropdownPax'
import Button from '../components/Button'
import Footer from '../components/Footer'

import './Accomodation.css'

const Accomodation = () => {
  const [roomType, setRoomType] = useState('')
  const [pax, setPax] = useState('')
  const [startDate, setStartDate] = React.useState()
  const [endDate, setEndDate] = React.useState()
  
  const history = useHistory()
  const dispatch = useDispatch()

  const onAccomodationConfirm = () => {
    dispatch(reservation.actions.setRoomtype(roomType))
    dispatch(reservation.actions.setPax(pax))
    dispatch(reservation.actions.setStartdate(startDate.toString()))
    dispatch(reservation.actions.setEnddate(endDate.toString()))

    localStorage.setItem('guestreservation', JSON.stringify({
        startDate: startDate.toString,
        endDate: endDate.toString,
        roomType: roomType,
        pax: pax,   
      })
    )

    history.push("/book")
  }

  return (
    <>
      <div className="acc-container">
        <div className="datepicker">
        <Datepicker 
          startDate={startDate} 
          setStartDate={setStartDate} 
          endDate={endDate} 
          setEndDate={setEndDate}
        />
        </div>
        <div className="dd-room">
          <DropdownRoom  roomType={roomType} setRoomType={setRoomType}/>
        </div>
        <div className="dd-pax">
          <DropdownPax  pax={pax} setPax={setPax}/>
        </div>
        <div className="btn-acc">
          <Button handleClick={onAccomodationConfirm} label="Check availability"/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Accomodation 