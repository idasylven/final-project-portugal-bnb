import { createSlice } from '@reduxjs/toolkit'

const guestreservation = createSlice({
  name: "guestreservation",
  initialState: {
    accomodation: {
      startdate: null,
      enddate: null,
      roomtype: null,
      pax: null
    },
    details: {
      firstname: null,
      lastname: null,
      email: null,
      phonenumber: null 
    }
  },
  reducers: {
    setStartdate: (store, action) => {
      store.startdate = action.payload
    },
    setEnddate: (store, action) => {
      store.enddate = action.payload
    },
    setRoomtype: (store, action) => {
      store.roomtype = action.payload
    },
    setPax: (store, action) => {
      store.pax = action.payload
    },
    setFirstname: (store, action) => {
      store.firstname = action.payload
    },
    setLastname: (store, action) => {
      store.lastname = action.payload
    },
    setEmail: (store, action) => {
      store.email = action.payload
    },
    setPhonenumber: (store, action) => {
      store.phonenumber = action.payload
    }
  }
})
 
// KARAN- We are wondering if we need to divide the reducers
// into two goups according to the initialstate where we have 
// them as accomodation and details.. or can we have them like this?

export default guestreservation