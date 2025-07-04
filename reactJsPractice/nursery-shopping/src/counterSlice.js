// import { createSlice } from '@reduxjs/toolkit'


// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         value: 0,
//         total: 0,
//         cardT: 0,
//         index: []
//     },
//     reducers: {
//         increment: state => {
//             state.value += 1
//         },
//         totalCardAmount: (state, action) => {
//             state.total += action.payload
//         },

//         cardIndex: (state, action) => {
//             state.index.push(action.payload)
//         },

//         cardDelete: (state, action) => {
//             state.index = state.index.filter(i => i !== action.payload)
//             state.value -= 1
//         },

//         decrementTotalCardAmount: (state, action) => {
//             if (state.total !== 0) {
//                 state.total -= action.payload
//             }
//         },
//         cardTotal: (state, action) => {
//             state.cardT += action.payload
//         },
//         cardTotalDecrement: (state, action) => {
//             if (state.cardT !== 0) {
//                 state.cardT -= action.payload
//             }
//         }

//     }
// })

// export const { increment, totalCardAmount, cardIndex, cardDelete, decrementTotalCardAmount, cardTotal, cardTotalDecrement } = counterSlice.actions

// export default counterSlice.reducer



import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    total: 0,
    index: [],
    quantities: {},   
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    totalCardAmount: (state, action) => {
      state.total += action.payload;
    },
    cardIndex: (state, action) => {
      const id = action.payload;
      if (!state.index.includes(id)) {
        state.index.push(id);
        state.quantities[id] = 1;
      }
    },
    cardDelete: (state, action) => {
      const id = action.payload.id;
      const qty = state.quantities[id];
      const plantPrice = action.payload.price ;

    //   console.log("plantPrice : ",plantPrice)
    //     console.log("id: ",id)
    //     console.log("Total: ",state.total)

      state.total -= plantPrice * qty;
      state.index = state.index.filter(i => i !== id);
      delete state.quantities[id];
      state.value -= 1;
    },
    incrementQuantity: (state, action) => {
      const id = action.payload.id;
      const price = action.payload.price;
      state.quantities[id] += 1;
      state.total += price;
    },
    decrementQuantity: (state, action) => {
      const id = action.payload.id;
      const price = action.payload.price;
      if (state.quantities[id] > 1) {
        state.quantities[id] -= 1;
        state.total -= price;
      }
    }
  }
});

export const {
  increment,
  totalCardAmount,
  cardIndex,
  cardDelete,
  incrementQuantity,
  decrementQuantity
} = counterSlice.actions;

export default counterSlice.reducer;
