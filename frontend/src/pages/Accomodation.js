import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { GiBranchArrow } from 'react-icons/gi'

import reservation from 'reducers/reservation'

import Datepicker from 'components/Datepicker'
import DropdownRoom from '../components/DropdownRoom'
import DropdownPax from '../components/DropdownPax'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HamburgerMenu from 'components/HamburgerMenu'


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
        <div className="acc-hamb-container">
        <div className="acc-hamb-menu">
        <HamburgerMenu />
        </div>
        </div>
       
         <picture>
          <source srcSet="/assets/images/alley.jpg" media="(max-width: 767px)"/>
          <source srcSet="/assets/images/alley.jpg" media="(max-width: 1024px)"/>
          <img className="hero-image" src="/assets/images/alley.jpg" alt="Hero background"/>
         </picture>
         <Navbar />
       
       
        <section className="room-container">
        
        <h1 className="room-mob-heading">OUR ROOMS</h1>
      
        <div className="room-box-left">
            <div className="room-wrapper">
              <h4 className="room-heading">Serenity Boost <GiBranchArrow size={30} style={{ transform:'rotate(-50deg)', verticalAlign:'middle' }}/></h4>
              
              <p className="room-text">
              Swirl into our room of tranquility and 
              enjoy the inspiring calmness to fill your spirit</p>
            </div>
            <img className="room-img" src="/assets/images/room-of-peace.jpg"></img>
          </div>

          <div className="room-box-right">
            <div className="room-wrapper">
              <h4 className="room-heading">Leafy Green <GiBranchArrow size={30} style={{ transform:'rotate(-50deg)', verticalAlign:'middle' }}/></h4>
              <p className="room-text">
              Enter our room of hope and joy, feel the freshness and 
              motivation to take on a new start</p>
            </div>
            <img className="room-img" src="/assets/images/room-of-leaf.jpg"></img>
          </div>

          <div className="room-box-left">
            <div className="room-wrapper">
            <h4 className="room-heading">Ocean Flow <GiBranchArrow size={30} style={{ transform:'rotate(-50deg)', verticalAlign:'middle' }}/></h4>
              <p className="room-text">
              Dive down in our room filled with the force of waves, 
              move with the rythm of water to keep floating</p>
            </div>
            <img className="room-img" src="/assets/images/room-of-water.jpg"></img>
          </div>

          <div className="room-box-right">
            <div className="room-wrapper">
            <h4 className="room-heading">Forest Feels <GiBranchArrow size={30} style={{ transform:'rotate(-50deg)', verticalAlign:'middle' }}/></h4>
              <p className="room-text">
              Stroll into our room of woodland and let the 
              nature enfold and re energize your soul</p>
            </div>
            <img className="room-img" src="/assets/images/room-of-wood.jpg"></img>
          </div>

        </section>
      <section className="acc-container">
      <h3 className="acc-heading">Start your reservation</h3>
        <div className="datepicker-container">
          <div className="dates-container">
            <p>Check In</p>
            <p>Check Out</p>
          </div>
          <div className="date-input">
            <Datepicker
              startDate={startDate} 
              setStartDate={setStartDate} 
              endDate={endDate} 
              setEndDate={setEndDate}
            />
        </div>
        </div>
        <hr className="solid"></hr>
        <div className="dd-room">
          <DropdownRoom  roomType={roomType} setRoomType={setRoomType}/>
        </div>
        
        <div className="dd-pax">
          <DropdownPax  pax={pax} setPax={setPax}/>
        </div>
        <div className="btn-acc">
          <Button handleClick={onAccomodationConfirm} label="Next"/>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Accomodation 