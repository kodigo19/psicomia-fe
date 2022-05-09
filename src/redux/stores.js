import { configureStore } from "@reduxjs/toolkit";
import signInUserReducer from './slices/auth/signInUserSlice';

export const authStore = configureStore({
  reducer: {
    signInUser: signInUserReducer,
  }
});