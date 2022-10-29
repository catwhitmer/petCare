import axios from 'axios'

const API_URL = 'http://localhost:8000/api/pets'

// Get todos
const getTodos = async (petID) => {
  const response = await axios.get(API_URL` + /${petID}/todos`)
  
  const data = await response.json()
  return data
}

const todoService = {
  getTodos,
}

export default todoService