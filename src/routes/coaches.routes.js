const { createCoach } = require('../controllers/coaches.controllers')

const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ message: 'You got the coaches' })
})

router.post('/', createCoach)

module.exports = router
