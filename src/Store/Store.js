import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../Slices/CartSlice'
import counterReducer from '../Slices/CounterSlice'

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: CartReducer
  },
})