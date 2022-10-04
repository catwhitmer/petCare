import axios from 'axios'

const API_URL = 'http://localhost:8000/api/pets'

// Get pets
const getPets = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

const petService = {
  getPets,
}

export default petService