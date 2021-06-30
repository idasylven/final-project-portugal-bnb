import React from 'react'

const DropdownPax = ({ pax, setPax }) => {

  return (
    <div className="dd-pax-container">
      <label>Nr of guests</label>
      <select
        onChange={event => setPax(event.target.value)}
        required
        aria-label='Select nr of guests'
        value={pax}
        >
          <option disabled aria-label='Select nr of guests'></option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
      </select>
    </div>
  )
}

export default DropdownPax