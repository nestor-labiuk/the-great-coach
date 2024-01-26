const express = require('express')

const app = express()

app.use(express.json())

app.use('/api/coaches', (req, res) => {
    res.json({ message: 'You got the coaches' })
})
app.use('/api/players', (req, res) => {
    res.json({ message: 'You got the players' })
})

module.exports = app
