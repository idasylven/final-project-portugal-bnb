import React from 'react'

const GuestDetails = ({ firstName, setFirstname, lastName, setLastname, email, setEmail, phoneNumber, setPhoneNumber }) => {

  return (
    <div>
      <input
        label="First name"
        type="text"
        id="firstName"
        onChange={event => setFirstname(event.target.value)}
        value={firstName}
      />
      <input
        type="text"
        id="lastName"
        onChange={event => setLastname(event.target.value)}
        value={lastName}
      />
      <input
        type="text"
        id="email"
        onChange={event => setEmail(event.target.value)}
        value={email}
      />
      <input
        type="text"
        id="phoneNumber"
        onChange={event => setPhoneNumber(event.target.value)}
        value={phoneNumber}
      />
    </div>
  )
}

export default GuestDetails