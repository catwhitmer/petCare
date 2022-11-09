const asyncHandler = require('express-async-handler')

const Todo = require('../models/todoModel')

// @desc Get todos
// @route GET /api/todos
// @access Private
const getTodos = asyncHandler(async (req, res) => {
    const todos =  await Todo.find()

    res.status(200).json(todos)
})

// @desc Set todos
// @route POST /api/todos
// @access Private
const setTodo = asyncHandler(async(req, res) => {
    if (!req.body.description) {
        res.status(400)
        throw new Error('Please add a description')
    }

    const todo = await Todo.create({
        description: req.body.description,
        notes: req.body.notes,
        petId: req.body.petID
    })
    res.status(200).json(todo)
})

// @desc Update todo
// @route PUT /api/todos/:id
// @access Private
const updateTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    if (!todo) {
        res.status(400)
        throw new Error('To-Do not found')
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedTodo)
}) 

// @desc Delete todo
// @route DELETE /api/todos/:id
// @access Private
const deleteTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    

    if (!todo) {
        res.status(400)
        throw new Error('to-Do not found')
    }

    await todo.remove()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo,
}