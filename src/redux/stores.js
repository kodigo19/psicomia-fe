import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/auth/userSlice';
import checkoutReducer from './slices/ecommerce/checkoutSlice';

export const authStore = configureStore({
  reducer: {
    auth: authReducer,
    checkout: checkoutReducer
  }
});