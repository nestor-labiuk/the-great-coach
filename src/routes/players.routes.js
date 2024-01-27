const router = require('express').Router()
const { createPlayer, getAllPlayers } = require('../controllers/players.controllers')

router.get('/', getAllPlayers)

router.post('/', createPlayer )

module.exports = router
