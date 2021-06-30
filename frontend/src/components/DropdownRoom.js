import React from 'react'

const DropdownRoom = ({ roomType, setRoomType }) => {

  return (
    <div className="dd-room-container">
      <label>Rooms</label>
      <select
        onChange={event => setRoomType(event.target.value)}
        required
        aria-label='Select room'
        value={roomType}
        >
          <option disabled aria-label='Choose a room'></option>
          <option value='Serenity Boost'>Serenity Boost</option>
          <option value='Leafy Green'>Leafy Green</option>
          <option value='Ocean Flow'>Ocean Flow</option>
          <option value='Forest Feels'>Forest Feels</option>
      </select>
    </div>
  )
}

export default DropdownRoom 