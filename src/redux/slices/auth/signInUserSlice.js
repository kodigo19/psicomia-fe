import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInUser } from "../../../utils/api/services/auth/signIn";

const initialState = {};

export const signInUserAsync = createAsyncThunk('signInUser', async (user) => {
  return await signInUser(user);
})

export const signInUserSlice = createSlice({
  name: 'signInUser',
  initialState,
  reducers: {
    setPasswordIsIncorrect: (state, action) => {
      state.passwordIsIncorrect = action.payload;
    },
    setEmailNotFound: (state, action) => {
      state.emailNotFound = action.payload;
    },
    setMinLengthPassword: (state, action) => {
      state.minLengthPassword = action.payload;
    },
    setInvalidEmail: (state, action) => {
      state.invalidEmail = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUserAsync.fulfilled, (state,action) => {
        state.loading = false;
        if (action.payload.success) {
          state.user = action.payload;
          localStorage.setItem('token', action.payload.idToken);
          localStorage.setItem('refreshToken', action.payload.refreshToken);
        } else {
          if (!action.payload.type) {
            if (action.payload.message === 'password is incorrect') {
              state.passwordIncorrect = true;
            } else if (action.payload.message === 'email not found') {
              state.emailNotFound = true;
            }
          } else {
            if (action.payload.message === 'ValidationError: Min length is 8') {
              state.minLengthPassword = true;
            } else if (action.payload.message === 'ValidationError: Invalid email.') {
              state.invalidEmail = true;
            }
          }
        }
      })
  }
});

export const { setPasswordIsIncorrect, setEmailNotFound, setMinLengthPassword, setInvalidEmail } = signInUserSlice.actions;
export const loadingLogin = (state) => state.signInUser.loading;
export const passwordIsIncorrect = (state) => state.signInUser.passwordIncorrect;
export const emailNotFound = (state) => state.signInUser.emailNotFound;
export const minLenPassword = (state) => state.signInUser.minLengthPassword;
export const invalidEmail = (state) => state.signInUser.invalidEmail;

export default signInUserSlice.reducer;
