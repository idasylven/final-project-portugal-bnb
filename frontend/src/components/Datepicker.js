import React from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

const Datepicker = ({ startDate, setStartDate, endDate, setEndDate }) => {
  // const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  // const [endDate, setEndDate] = useState(new Date("2014/02/10"));

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};

export default Datepicker


// import "react-dates/initialize"
// // import { useDispatch } from 'react-redux'
// import { DateRangePicker } from "react-dates"
// import "react-dates/lib/css/_datepicker.css"

// import reservation from '../reducers/reservation'

// const Datepicker = ({ startDate, setStartDate, endDate, setEndDate }) => {
 
//   const [focusedInput, setFocusedInput] = React.useState() 

//   // const dispatch = useDispatch()

//   return (
//     <form className="booking-form">
//       <DateRangePicker
//         startDate={startDate}
//         startDateId="start-date"
//         endDate={endDate}
//         endDateId="end-date"
//         onDatesChange={({ startDate, endDate }) => {
//           // Add a batch to dispatch everything in one go
//          setStartDate(startDate)
//          setEndDate(endDate)
//         }}
//         focusedInput={focusedInput}
//         onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
//       />
      
//     </form>
//   );
// }

// export default Datepicker