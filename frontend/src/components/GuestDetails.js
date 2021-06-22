import React from 'react'

import "./GuestDetails.css"

const GuestDetails = ({ firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber }) => {

  return (
    <div className="guestdetails-box">
      <input
        placeholder="First name"
        label="First name"
        type="text"
        id="firstName"
        onChange={event => setFirstName(event.target.value)}
        value={firstName}
      />
      <input
        placeholder="Last name"
        label="Lastname"
        type="text"
        id="lastName"
        onChange={event => setLastName(event.target.value)}
        value={lastName}
      />
      <input
        placeholder="Email"
        label="Email"
        type="text"
        id="email"
        onChange={event => setEmail(event.target.value)}
        value={email}
      />
      <input
        placeholder="Phonenumber"
        label="Phonenumber"
        type="text"
        id="phoneNumber"
        onChange={event => setPhoneNumber(event.target.value)}
        value={phoneNumber}
      />
    </div>
  )
}

export default GuestDetails