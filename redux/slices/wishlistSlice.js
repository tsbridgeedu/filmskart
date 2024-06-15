import { createSlice } from '@reduxjs/toolkit'

const storedWishlistItems = localStorage.getItem("wishListItems");

const initialState = {wishListItems: storedWishlistItems ? JSON.parse(storedWishlistItems) : []}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleItem: (state, action) => {
        const { itemId } = action.payload
        const index = state.wishListItems.indexOf(itemId)
        if(index > -1){
          state.wishListItems = state.wishListItems.filter(item => item !== itemId);
        }else{
          state.wishListItems.push(itemId)
        }
        localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));
    },
    clearWishlist: (state) => {
        state.wishListItems = {}
        localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleItem, clearWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer