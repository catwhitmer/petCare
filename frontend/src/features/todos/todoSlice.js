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

// Create todo
export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (todoData) => {
    const todoInfo = todoData.formData
    try {
      return await todoService.createTodo(todoInfo)
    } catch (error) {
      return error.data
    }
  }
)

// Update todo
export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async ({todoId, todoData}) => {
    const todoInfo = todoData.formData
    try {
      return await todoService.updateTodo(todoId, todoInfo)
    } catch (error) {
      return error.data
    }
  }
)

// Delete todo
export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (todoId) => {
    try {
      return await todoService.deleteTodo(todoId)
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
      .addCase(createTodo.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.todos.push(action.payload)
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateTodo.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
       
        const updatedTodo = state.todos.find((todo) => todo._id === action.payload._id)
        
        if (updatedTodo) {
          updatedTodo.description = action.payload.description
          updatedTodo.notes = action.payload.notes
        }
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteTodo.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.todos = state.todos.filter((todo) => todo._id !== action.payload._id)
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = todoSlice.actions
export default todoSlice.reducer