import { configureStore } from "@reduxjs/toolkit";
import signInUserReducer from './slices/auth/userSlice';
import checkoutReducer from './slices/ecommerce/checkoutSlice';

export const authStore = configureStore({
  reducer: {
    signInUser: signInUserReducer,
    checkout: checkoutReducer
  }
});