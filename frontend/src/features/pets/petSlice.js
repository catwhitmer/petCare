import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import petService from './petService'

const initialState = {
  pets: [],
  isLoading: false,
  message: '',
}

// Get pets
export const getPets = createAsyncThunk(
  'pets/getPets',
  async () => {
    try {
      return petService.getPets()
    } catch (error) {
      return error.data
    }
  }
)

export const petSlice = createSlice({
  name: 'pets',
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
        state.message = action.payload
      })
  }
})

export const { reset } = petSlice.actions
export default petSlice.reducer