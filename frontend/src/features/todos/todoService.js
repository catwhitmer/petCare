import axios from 'axios'

const API_URL = 'http://localhost:8000/api/pets'

const github = axios.create({
  baseURL: API_URL,
})

// Get todos
const getTodos = async (petID) => {
  const response = await github.get(`/${petID}/todos`)
  return response.data
}

const todoService = {
  getTodos,
}

export default todoService