const router = require('express').Router()
const { createCoach, getAllCoaches } = require('../controllers/coaches.controllers')

router.get('/', getAllCoaches)

router.post('/', createCoach)

module.exports = router
