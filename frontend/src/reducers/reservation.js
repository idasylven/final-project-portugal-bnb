import { createSlice } from '@reduxjs/toolkit'

const guestreservation = createSlice({
  name: "guestreservation",
  initialState: {
    accomodation: {
      startdate: '',
      enddate: '',
      roomtype: '',
      pax: ''
    },
    details: {
      firstname: null,
      lastname: null,
      email: null,
      phonenumber: null 
    },
    confirmation: {}
  },
  reducers: {
    setStartdate: (store, action) => {
      store.accomodation.startdate = action.payload
    },
    setEnddate: (store, action) => {
      store.accomodation.enddate = action.payload
    },
    setRoomtype: (store, action) => {
      store.accomodation.roomtype = action.payload
    },
    setPax: (store, action) => {
      store.accomodation.pax = action.payload
    },
    setFirstname: (store, action) => {
      store.details.firstname = action.payload
    },
    setLastname: (store, action) => {
      store.details.lastname = action.payload
    },
    setEmail: (store, action) => {
      store.details.email = action.payload
    },
    setPhonenumber: (store, action) => {
      store.details.phonenumber = action.payload
    }
  }
})
 
// KARAN- We are wondering if we need to divide the reducers
// into two goups according to the initialstate where we have 
// them as accomodation and details.. or can we have them like this?

export default guestreservation