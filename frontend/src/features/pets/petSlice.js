import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
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
      console.log(petService.getPets())
      return await petService.getPets()
    } catch (error) {
      console.log(error)
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
  'pets/new',
  async (petData, thunkAPI) => {
    try {
      console.log(petData)
      return await petService.createPet(petData)
    } catch (error) {
      console.log(error)
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
      .addCase(getPets.fulfilled, (state, action) => {
        state.isLoading = false
        state.pets = action.payload
      })
      .addCase(getPets.rejected, (state, action) => {
        state.isLoading = false
      })
  }
})

export const { reset } = petSlice.actions
export default petSlice.reducer