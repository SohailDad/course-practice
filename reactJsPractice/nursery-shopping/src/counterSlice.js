import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    total: 0
  },
  reducers: {
    increment: state => {
   
      state.value += 1
    },
    totalCardAmount: (state, action) => {
      state.total += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, totalCardAmount } = counterSlice.actions

export default counterSlice.reducer