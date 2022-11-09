import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import todoService from './todoService'

const initialState = {
  todos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get todos
export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async () => {
    try {
      return await todoService.getTodos()
    } catch (error) {
      return error.data
    }
  }
)

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.todos = action.payload
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = todoSlice.actions
export default todoSlice.reducer