const Player = require('../model/Players')

const getAllPlayers = async (req, res, next) => {
    try {
        const players = await Player.find({})
        if (players.length === 0) {
            return res.status(404).json({ message: 'No players found' })
        }
        res.json(players)
    } catch (err) {
        next(err)
    }
}

const createPlayer = async (req, res, next) => {
    try {
        const { firstName, lastName, skillfulFoot } = req.body
        const player = new Player({ firstName, lastName, skillfulFoot })
        await player.save()
        res.json(player)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createPlayer,
    getAllPlayers
}
