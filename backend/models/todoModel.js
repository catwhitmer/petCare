const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    notes: {
        type: String
    },
    petId: {
        type: Number,
        required: [true, 'Pet not found'],
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Todos', todoSchema)