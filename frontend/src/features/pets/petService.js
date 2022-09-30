import axios from 'axios'

const API_URL = '/api/pets/'

// Get pets
const getPets = async (token) => {
    const config = {
      headers: {
      },
    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }

const petService = {
    getPets,
}

export default petService