import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import listEndpoints from 'express-list-endpoints'
import dotenv from 'dotenv'

dotenv.config()

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/portugal-bnb"
mongoose.connect(mongoUrl, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true, 
})
mongoose.Promise = Promise

const GuestAccomodation = mongoose.model("GuestAccomodation", {
  startdate: {
    type: Number, 
    required: true,
  },
  enddate: {
    type: Number, 
    required: true,
  },
  roomtype: {
    type: String, 
    required: true,
  },
  pax: {
    type: Number, 
    required: true,
  }
})

const GuestDetails = mongoose.model("GuestDetails", {
  
  firstname: {
    type: String, 
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number, 
    required: true,
  }
})

const GuestReservation = mongoose.model("GuestReservation", {
  accomodation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GuestAccomodation" 
  },
  details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GuestDetails" 
  }
})

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

// Start defining your routes here
app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

app.post("/reservation", async (req, res) => {
  const { startDate, endDate, roomType, pax, firstName, lastName, email, phoneNumber } = req.body

  try {
    const newAccomodation = await new GuestAccomodation ({
      startDate,
      endDate,
      roomType,
      pax
    }).save()
    const newDetails = await new GuestDetails ({
      firstName,
      lastName,
      email,
      phoneNumber
    }).save()
    const newReservation = await new GuestReservation ({
      accomodation: newAccomodation,
      details: newDetails
    }).save()

    res.status(201).json({ success: true, newReservation })
  } catch (error) {
    res.status(400).json({ success: false, message: 'Page not found', error })
  }
})

// app.post("/accomodation", async (req, res) => {
//   const { date, roomtype, pax } = req.body

//   try {
//     const newGuestAccomodation = await new GuestAccomodation ({
//       date,
//       roomtype,
//       pax
//     }).save() 

//     res.json ({
//       success: true,
//       userID: newGuestAccomodation._id,
//       date: newGuestAccomodation.date,
//       roomtype: newGuestAccomodation.roomtype,
//       pax: newGuestAccomodation.pax
//     })

//   } catch (error) {
//     res.status(400).json({ success: false, message: "Sorry something went wrong!"})
//   }
// })

// app.post("/book", async (req, res) => {
//   const { firstname, lastname, email, phonenumber } = req.body

//   try {
//     const newGuestDetails = await new GuestDetails ({
      
//       firstname,
//       lastname,
//       email,
//       phonenumber
//     }).save() 

//     res.json ({
//       success: true,
//       userID: newGuestDetails._id,
//       firstname: newGuestDetails.firstname,
//       lastname: newGuestDetails.lastname,
//       email: newGuestDetails.email,
//       phonenumber: newGuestDetails.phonenumber
//     })

//   } catch (error) {
//     res.status(400).json({ success: false, message: "Sorry something went wrong!"})
//   }
// })

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`)
})


// Is an access token needed?
// accessToken: {
// type: String,
//  default: () => crypto.randomBytes(128).toString("hex"),
// },