import React from 'react'
import { useHistory } from 'react-router-dom'

import Datepicker from '../components/Datepicker'
import DropdownRoom from '../components/DropdownRoom'
import DropdownPax from '../components/DropdownPax'
import Button from '../components/Button'

const Accomodation = () => {
  const history = useHistory()
  const onAccomodationConfirm = () => {
    history.push("/book")
  }

  return (
    <div>
      <Datepicker />
      <DropdownRoom />
      <DropdownPax />
      <Button handleClick={onAccomodationConfirm} label="Check availability"/>
    </div>
  )
}

export default Accomodation

// Add function to button 