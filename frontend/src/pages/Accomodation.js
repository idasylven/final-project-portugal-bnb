import React from 'react'

import Datepicker from '../components/Datepicker'
import DropdownRoom from '../components/DropdownRoom'
import DropdownPax from '../components/DropdownPax'
import Button from '../components/Button'

const Accomodation = () => {
  return (
    <div>
      <Datepicker />
      <DropdownRoom />
      <DropdownPax />
      <Button label="Check availability"/>
    </div>
  )
}

export default Accomodation

// Add function to button 