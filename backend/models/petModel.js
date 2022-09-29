const mongoose = require('mongoose')

const petSchema = mongoose.Schema({
    name: {
        type: String
    },
    species: {
        type: String
    },
    breed: {
        type: String
    },
    age: {
        type: Number
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Pets', petSchema)