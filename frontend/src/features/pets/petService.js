import axios from 'axios'

const API_URL = '/api/pets/'

// Get pets
const getPets = async () => {
  const response = await axios.get(API_URL)
  console.log(response)
  console.log(API_URL)
  return response.data
}

const petService = {
  getPets,
}

export default petService