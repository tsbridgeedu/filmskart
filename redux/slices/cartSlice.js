import { createSlice } from '@reduxjs/toolkit'

const storedCartItems = localStorage.getItem("cartItems");

const initialState = {cartItems: storedCartItems ? JSON.parse(storedCartItems) : {}}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
        const { itemId, quantity } = action.payload
        if(quantity === undefined){
            const quantity = 1
        }
        if(state.cartItems[itemId] === undefined){
            state.cartItems = {...state.cartItems, [itemId]: quantity}
        }else{
            state.cartItems = {...state.cartItems, [itemId]: state.cartItems[itemId] + quantity}
        };
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeProduct: (state, action) => {
        const { itemId } = action.payload
        if (state.cartItems[itemId] === undefined){ return;}
        else if(state.cartItems[itemId] <= 1){
            const newCartItems = {...state.cartItems};
            delete newCartItems[itemId];
            state.cartItems = newCartItems;
        }
        else{
            state.cartItems = {...state.cartItems, [itemId]: (state.cartItems[itemId]-1) };
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
        state.cartItems = {}
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, clearCart } = cartSlice.actions

export default cartSlice.reducer