import { createSlice } from '@reduxjs/toolkit'

  const initialState = localStorage.getItem('guestreservation') ? {
        // accomodation: JSON.parse(localStorage.getItem('guestreservation')).accomodation,
        // details: JSON.parse(localStorage.getItem('guestreservation')).details,
        accomodation: {
          startdate: JSON.parse(localStorage.getItem('guestreservation')).startdate,
          enddate: JSON.parse(localStorage.getItem('guestreservation')).enddate,
          roomtype: JSON.parse(localStorage.getItem('guestreservation')).roomtype,
          pax: JSON.parse(localStorage.getItem('guestreservation')).pax
        },

        details: {
          firstname: JSON.parse(localStorage.getItem('guestreservation')).firstname,
          lastname: JSON.parse(localStorage.getItem('guestreservation')).lastname,
          email: JSON.parse(localStorage.getItem('guestreservation')).email,
          phonenumber: JSON.parse(localStorage.getItem('guestreservation')).phonenumber,
        }
  }
  : 
  {
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
      phonenumber: null,
    },

    confirmation: {},
    errors: null
  }

const guestreservation = createSlice({
  name: "guestreservation",
  initialState: initialState,
  
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
    },
    setErrors: (store, action) => {
      store.errors = action.payload
    }
  }
})

// reducer: {
//   accomodation: {
//     startdate: '',
//     enddate: '',
//     roomtype: '',
//     pax: ''
//   },
//   details: {
//     firstname: '',
//     lastname: '',
//     email: '',
//     phonenumber: '' 
//   },
//   confirmation: {},
//   errors: null
// },
 
// KARAN- We are wondering if we need to divide the reducers
// into two goups according to the initialstate where we have 
// them as accomodation and details.. or can we have them like this?

export default guestreservation