import React from 'react'

const DropdownRoom = ({ roomType, setRoomType }) => {

  return (
    <div>
      <label>Rooms</label>
      <select
        onChange={event => setRoomType(event.target.value)}
        required
        aria-label='Select room'
        value={roomType}
        >
          <option disabled aria-label='Choose a room'></option>
          <option value='Red room'>Serenity Boost</option>
          <option value='Green room'>Leafy Green</option>
          <option value='Blue room'>Ocean Flow</option>
          <option value='Blue room'>Forest Feels</option>
      </select>
    </div>
  )
}

export default DropdownRoom 