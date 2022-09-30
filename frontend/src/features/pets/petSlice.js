import { createSlice, createAsyncThunk } from 'reduxjs/toolkit'

const initialState = {

}

export const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(()=> {

    })
  }
})

export const {} = petSlice.actions
export default petSlice.reducer