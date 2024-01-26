const { Schema, model } = require('mongoose')

const coachSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    purchaseFund: {
        type: Number,
        default: 1000000
    },
    playersList: {
        type: Array,
        default: []
    }
})

const Coach = model('Coach', coachSchema)

module.exports = Coach
