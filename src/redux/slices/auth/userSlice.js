import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserFirebaseService } from "../../../utils/api/services/auth/loginUserFirebaseService";

export const loginUserAsync = createAsyncThunk('loginUser', async (user) => {
  return await loginUserFirebaseService(user);
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  } ,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const {loginUser, logoutUser} = userSlice.actions;

// Selector
export const selectUser = (state) => state.signInUser.user;

export default userSlice.reducer;