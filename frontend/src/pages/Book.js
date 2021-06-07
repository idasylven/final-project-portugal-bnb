import React from 'react'

import Datepicker from '../components/Datepicker'
import DropdownRoom from '../components/DropdownRoom'
import DropdownPax from '../components/DropdownPax'
import GuestDetails from '../components/GuestDetails'


const Book = () => {
  return (
    <div>
      <Datepicker />
      <DropdownRoom />
      <DropdownPax />
      <GuestDetails />
    </div>
  )
}

export default Book