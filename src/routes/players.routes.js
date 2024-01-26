const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ message: 'You got the players' })
})

router.post('/', (req, res) => {
    res.json({ message: 'Players created' })
})

module.exports = router
