import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        total: 0,
        cardT: 0,
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
            state.value -= 1
        },

        decrementTotalCardAmount: (state, action) => {
            if (state.total !== 0) {
                state.total -= action.payload
            }
        },
        cardTotal: (state, action) => {
            state.cardT += action.payload
        },
        cardTotalDecrement: (state, action) => {
            if (state.cardT !== 0) {
                state.cardT -= action.payload
            }
        }

    }
})

export const { increment, totalCardAmount, cardIndex, cardDelete, decrementTotalCardAmount, cardTotal, cardTotalDecrement } = counterSlice.actions

export default counterSlice.reducer