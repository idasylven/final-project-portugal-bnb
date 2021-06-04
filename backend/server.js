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

const GuestReservation = mongoose.model("GuestReservation", {
  date: {
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
  },
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
});

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

app.post("/book", async (req, res) => {
  const { date, roomtype, pax, firstname, lastname, email, phonenumber } = req.body

  try {
    const newGuestReservation = await new GuestReservation ({
      date,
      roomtype,
      pax,
      firstname,
      lastname,
      email,
      phonenumber
    }).save() 

    res.json ({
      success: true,
      userID: newGuestReservation._id,
      date: newGuestReservation.date,
      roomtype: newGuestReservation.roomtype,
      pax: newGuestReservation.pax,
      firstname: newGuestReservation.firstname,
      lastname: newGuestReservation.lastname,
      email: newGuestReservation.email,
      phonenumber: newGuestReservation.phonenumber
    })

  } catch (error) {
    res.status(400).json({ message: "Sorry something went wrong!"})
  }
})

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

// Start defining your routes here
app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

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