import axios from 'axios'

const API_URL = 'http://localhost:8000/api/todos'

// Get todos
const getTodos = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

// Create Todo
const createTodo = async (todoData) => {
  const response = await axios.post(API_URL, todoData)
  return response.data
}

const todoService = {
  getTodos,
  createTodo,
}

export default todoService