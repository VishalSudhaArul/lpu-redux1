import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
        action.payload.quantity = 1
        state.items = [...state.items, action.payload];
    },
    increment: (state,action) => {

    },
    decrement: (state,action) => {
      
    }
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
