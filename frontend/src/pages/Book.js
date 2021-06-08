import React from 'react'
import { useHistory } from 'react-router-dom'

import GuestDetails from '../components/GuestDetails'
import Button from '../components/Button'

const Book = () => {

  const history = useHistory()
  const onBookConfirm = () => {
    history.push("/confirmation")
  }

  return (
    <div>
      <GuestDetails />
      <Button handleClick={onBookConfirm} label="Book" />
    </div>
  )
}

export default Book

// Add function to button