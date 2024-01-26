const Coach = require('../model/Coaches')

const createCoach = async (req, res, next) => {
    try {
        const { firstName, lastName } = req.body
        const coach = new Coach({ firstName, lastName })
        await coach.save()
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createCoach
}
