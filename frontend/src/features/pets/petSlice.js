import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import petService from './petService'

const initialState = {
  pets: [],
  isError: false,
  isSuccess: false,
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

// Create Pet
export const createPet = createAsyncThunk(
  'pets/createPet',
  async (petData) => {
    const petInfo = petData.formData
    try {
      return petService.createPet(petInfo)
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
        state.isSuccess = true
        state.pets = action.payload
      })
      .addCase(getPets.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createPet.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(createPet.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.pets.push(action.payload)
      })
      .addCase(createPet.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = petSlice.actions
export default petSlice.reducer