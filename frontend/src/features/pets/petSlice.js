import { createSlice, createAsyncThunk } from 'reduxjs/toolkit'
import petService from './petService'

const initialState = {
  pets: [],
  isLoading: false,
}

// Get pets
export const getPets = createAsyncThunk(
  'pets',
  async (_, thunkAPI) => {
    try {
      return await petService.getPets()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Create new pet
export const createPet = createAsyncThunk(
  'pet/new',
  async (petData, thunkAPI) => {
    try {
      return await petService.createGoal(petData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPets.pending, (state) => {
        state.isLoading = true
      })
  }
})

export const { reset } = petSlice.actions
export default petSlice.reducer