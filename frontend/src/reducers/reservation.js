import { createSlice } from '@reduxjs/toolkit'

const guestreservation = createSlice({
  name: "guestreservation",
  initialState: {
    accomodation: null,
    details: null
  },
  reducers: {
    setAccomodation: (store, action) => {
      store.accomodation = action.payload
    },
    setDetails: (store, action) => {
      store.details = action.payload
    }
  }
})

export default guestreservation