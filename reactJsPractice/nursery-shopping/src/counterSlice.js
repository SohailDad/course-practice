import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        total: 0,
        index: []
    },
    reducers: {
        increment: state => {

            state.value += 1
        },
        totalCardAmount: (state, action) => {
            state.total += action.payload
        },

        cardIndex: (state, action) => {
            state.index.push(action.payload)
        },

        cardDelete: (state, action) => {
            state.index = state.index.filter(i => i !== action.payload)
            state.value -=1
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, totalCardAmount, cardIndex, cardDelete } = counterSlice.actions

export default counterSlice.reducer