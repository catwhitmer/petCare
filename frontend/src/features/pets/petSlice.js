import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import petService from './petService'

const initialState = {
  pets: [],
  isLoading: false,
  message: '',
}

// Get pets
export const getPets = createAsyncThunk(
  'pet/getPets',
  async () => {
    try {
      const resp = await petService.getPets()
      return resp.data
    } catch (error) {
      return error.resp
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
        state.message = action.payload
      })
  }
})

export const { reset } = petSlice.actions
export default petSlice.reducer