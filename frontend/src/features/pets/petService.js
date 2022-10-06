import axios from 'axios'

const API_URL = 'http://localhost:8000/api/pets'

// Get pets
const getPets = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

// Create pet
const createPet = async (petData) => {
  console.log(petData)
  const response = await axios.post(API_URL + '/new', petData)
  console.log(response)
  return response.data
}

const petService = {
  getPets,
  createPet,
}

export default petService