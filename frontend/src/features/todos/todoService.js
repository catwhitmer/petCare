import axios from 'axios'

const API_URL = 'http://localhost:8000/api/pets/:petID/todos'

// Get todos
const getTodos = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

const todoService = {
  getTodos,
}

export default todoService