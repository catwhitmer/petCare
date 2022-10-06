const mongoose = require('mongoose')

const petSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    species: {
        type: String,
    },
    breed: {
        type: String,
    },
    age: {
        type: Number,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Pets', petSchema)