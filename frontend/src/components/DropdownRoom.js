import React from 'react'

const DropdownRoom = ({ roomtype, setRoomtype }) => {

  return (
    <div>
    
      <label>Rooms</label>
      <select
        onChange={event => setRoomtype(event.target.value)}
        required
        aria-label='Select room'
        value={roomtype}
        >
          <option disabled aria-label='Choose a room'></option>
          <option value='Red room'>Red room</option>
          <option value='Green room'>Green room</option>
          <option value='Blue room'>Blue room</option>
      </select>
    </div>
  )
}

export default DropdownRoom 