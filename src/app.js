const express = require('express')

const app = express()

app.use(express.json())

app.use('/api/test', (req, res) => {
    res.json({ message: 'Osito alegre' })
})

module.exports = app
