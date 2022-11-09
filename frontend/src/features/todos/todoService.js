import axios from 'axios'

const API_URL = 'http://localhost:8000/api/todos'

const github = axios.create({
  baseURL: API_URL,
})

// Get todos
const getTodos = async () => {
  const response = await github.get(API_URL)
  return response.data
}

const todoService = {
  getTodos,
}

export default todoService