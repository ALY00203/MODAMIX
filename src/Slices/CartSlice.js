/* eslint-disable eqeqeq */
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cart: [],
    isLoading: false,
  }
  export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{
   addToCart: (state, {payload}) => {
    const item =  state.cart.filter((item) => item.id == payload.id);
    if  (item.length) {
      item[0].count  += 1;
    } else {
      const newP = {...payload, count : 1}
      state.cart.push(newP);
    }
   },
   handleRemoveItem: (state, {payload}) => {
    const newState = state.cart.filter(item=> item.id != payload.id);
    state.cart = newState
   },
   inToCart : (state, {payload}) => {
    const item =  state.cart.filter((item) => item.id == payload.id);
    item[0].count  += 1;
   },
   deFromCart : (state, {payload}) => {
    const item =  state.cart.filter((item) => item.id == payload.id);
    item[0].count > 1 ? (item[0].count -= 1 ) : (item[0].count = 1)
   },
  }
  }
);
export const {addToCart, handleRemoveItem, inToCart, deFromCart} = cartSlice.actions;
export default cartSlice.reducer;
