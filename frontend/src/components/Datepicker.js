import React from 'react'
import "react-dates/initialize"
import { batch, useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"

import reservation from '../reducers/reservation'

const Datepicker = () => {
  const [startDate, setStartDate] = React.useState()
  const [endDate, setEndDate] = React.useState()
  const [focusedInput, setFocusedInput] = React.useState() //KARAN- Should it be an action like onchange, or similar here?

  const dispatch = useDispatch()

  return (
    <form className="booking-form">
      <DateRangePicker
        startDate={startDate}
        startDateId="start-date"
        endDate={endDate}
        endDateId="end-date"
        onDatesChange={({ startDate, endDate }) => {
          // Add a batch to dispatch everything in one go
         dispatch(reservation.actions.setStartDate(startDate))
         dispatch(reservation.actions.setEndDate(endDate))
        }}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
      />
      
    </form>
  );
}

export default Datepicker