const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const coachesRouter = require('./routes/coaches.routes')
const playersRouter = require('./routes/players.routes')

const app = express()

app.use(express.json())

app.use('/api/coaches', coachesRouter)

app.use('/api/players', playersRouter)

mongoose.connect(process.env.MONGO_CONNECTION)
    .then(() => console.log('Connected'))
    .catch(() => console.log('Not Connected'))

module.exports = app
