import React from 'react'

const GuestDetails = ({ firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber }) => {

  return (
    <div>
      <input
        label="First name"
        type="text"
        id="firstName"
        onChange={event => setFirstName(event.target.value)}
        value={firstName}
      />
      <input
        type="text"
        id="lastName"
        onChange={event => setLastName(event.target.value)}
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