const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    description: {
        type: String
    },
    notes: {
        type: String
    },
    petId: {
        type: Number
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Todos', todoSchema)