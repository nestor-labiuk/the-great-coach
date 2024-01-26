const { Schema, model } = require('mongoose')

const playerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    skillfulFoot: {
        type: String,
        required: true,
    },
    basePrice: { 
        type: Number,
        default: 20000
    },
    stars: {
        type: Number,
        default: 1
    }
})

const Player = model('Player', playerSchema)

module.exports = Player
