const express = require('express')
const coachesRouter = require('./routes/coaches.routes')
const playersRouter = require('./routes/players.routes')

const app = express()

app.use(express.json())

app.use('/api/coaches', coachesRouter)

app.use('/api/players', playersRouter)

module.exports = app
