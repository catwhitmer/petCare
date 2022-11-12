import axios from 'axios'

const API_URL = '/api/pets/'

// Get pets
const getPets = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

// Create pet
const createPet = async (petData) => {
  const response = await axios.post(API_URL, petData)
  return response.data
}

// Delete pet
const deletePet = async (petId) => {
  const response = await axios.delete(API_URL + petId)
  return response.data
}

const petService = {
  getPets,
  createPet,
  deletePet,
}

export default petService