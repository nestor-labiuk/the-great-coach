const Coach = require('../model/Coaches')

const getAllCoaches = async (req, res, next) => {
    try {
        const coaches = await Coach.find({})
        if (coaches.length === 0) {
            return res.status(404).json({ message: 'Coaches not found' })
        }
        res.json(coaches)
    } catch (err) {
        next(err)
    }
}

const createCoach = async (req, res, next) => {
    try {
        const { firstName, lastName } = req.body
        const coach = new Coach({ firstName, lastName })
        await coach.save()
        res.json(coach)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createCoach,
    getAllCoaches
}
