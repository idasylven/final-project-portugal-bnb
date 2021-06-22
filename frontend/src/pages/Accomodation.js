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
         <picture>
          <source srcSet="/assets/images/alley.jpg" media="(max-width: 767px)"/>
          <source srcSet="/assets/images/alley.jpg" media="(max-width: 1024px)"/>
          <img className="hero-image" src="/assets/images/alley.jpg" alt="Hero background"/>
         </picture>
         <p className="acc-welcome-text">
          Casa de Shwee wanna welcome you to the gem of Portugal.
            See what room
            that connects with you!
        </p>
        <p>
          OUR ROOMS
        </p>
        <section className="room-container">
          <div className="room-box">
            <p className="room-description">
              Serenity boost
              Swirl into our room of tranquility and 
              enjoy the inspiring calmness to fill your spirit
            </p>
            <img className="room-pics" src="/assets/images/cactus.jpg" alt="bedroom pic"/>
          </div>
          <div className="room-box">
            <p className="room-description">
              Leafy green
              Enter our room of hope and joy, feel the freshness and 
              motivation to take on a new start
            </p>
            <img className="room-pics" src="/assets/images/cactus.jpg" alt="bedroom pic"/>
          </div>
          <div className="room-box">
            <p className="room-description">
              Ocean flow
              Dive down in our room filled with the force of waves, 
              move with the rythm of water to keep floating
            </p>
            <img className="room-pics" src="/assets/images/cactus.jpg" alt="bedroom pic"/>
          </div>
          <div className="room-box">
            <p className="room-description">
              Forest feels
              Stroll into our room of woodland and let the 
              nature enfold and re energize your soul
            </p>
            <img className="room-pics" src="/assets/images/cactus.jpg" alt="bedroom pic"/>
          </div>
        </section>
      <div className="acc-container">
      <p>Start your reservation</p>
        <div className="datepicker">
        <p>Check In</p>
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