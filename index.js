const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const travelRoutes = require('./controllers/travel')
const pokemonRoutes = require('./routes/pokemon')

const app = express()

//MIDDLEWARE - always above routes
app.use(express.json())

//Routes
app.use('/travel', travelRoutes)
app.use('/pokemon', travelRoutes)

// db connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT 

app.listen(PORT, console.log(`listening on port ${PORT}`))
