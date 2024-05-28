import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.carts = [...state.carts, action.payload]
     
    },
  },
});

export const  {addToCart} = ProductSlice.actions;
export default ProductSlice.reducer;