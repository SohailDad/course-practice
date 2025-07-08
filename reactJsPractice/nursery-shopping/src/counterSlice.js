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

      // console.log("plantPrice : ",plantPrice)  // for testing
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
