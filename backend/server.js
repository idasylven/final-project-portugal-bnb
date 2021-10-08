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
    type: String, 
    required: true,
  },
  enddate: {
    type: String, 
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
    required: [true,"Name is required"],
    minlength: [2, "First name has to be at least 2 characters"],
    maxlength: [50, "First name can not exceed the maximum of 50 characters"]
  },
  lastname: {
    type: String,
    required: [true,"Name is required"],
    minlength: [2, "Last name has to be at least 2 characters"],
    maxlength: [50, "Last name can not exceed the maximum of 50 characters"]
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    trim: [true, "Email can not include empty space"],
    lowercase: [true, "Please, use only lowercase letters"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
},
  phonenumber: {
    type: Number, 
    required: [true, "Phone number required"]
    }
  }
  
)

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

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

app.get("/reservations", async (req, res) => {
  try {
    const reservations = await GuestReservation.find()

    const fixedResult = []
    for (const reservation of reservations) {
      const reservationAccomodation = await GuestAccomodation.findById(reservation.accomodation)
      const reservationDetails = await GuestDetails.findById(reservation.details)
      fixedResult.push({
        _id: reservation._id,
        startdate: reservationAccomodation.startdate,
        enddate: reservationAccomodation.enddate,
        roomtype: reservationAccomodation.roomtype,
        pax: reservationAccomodation.pax,
        firstname: reservationDetails.firstname,
        lastname: reservationDetails.lastname,
        email: reservationDetails.email,
        phonenumber: reservationDetails.phonenumber
      })
    }

    res.status(200).json({
      success: true,
      result: fixedResult
    })
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid request', error })
  }
})

app.get("/reservation/:id", async (req, res) => {
  const { id } = req.params

  try {
    const reservation = await GuestReservation.findById(id)

    const reservationAccomodation = await GuestAccomodation.findById(reservation.accomodation)
    const reservationDetails = await GuestDetails.findById(reservation.details)

    res.status(200).json({
      success: true,
      _id: id,
      startdate: reservationAccomodation.startdate,
      enddate: reservationAccomodation.enddate,
      roomtype: reservationAccomodation.roomtype,
      pax: reservationAccomodation.pax,
      firstname: reservationDetails.firstname,
      lastname: reservationDetails.lastname,
      email: reservationDetails.email,
      phonenumber: reservationDetails.phonenumber
    })
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid request', error })
  }
}) 

app.post("/reservation", async (req, res) => {
  const { startdate, enddate, roomtype, pax, firstname, lastname, email, phonenumber } = req.body

  try {
    const newAccomodation = await new GuestAccomodation ({
      startdate,
      enddate,
      roomtype,
      pax
    }).save()
    const newDetails = await new GuestDetails ({
      firstname,
      lastname,
      email,
      phonenumber
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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
