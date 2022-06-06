import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserFullService } from "../../../utils/api/services/auth/loginUserFullService";
import { recoveryPasswordFirebaseService } from "../../../utils/api/services/auth/recoveryPasswordFirebaseService";
import { signupClientFullService, signupPsychologistFullService } from "../../../utils/api/services/auth/signupUserFullService";
import { handleError } from "../../../utils/api/services/shared/errors/errorUtils";

export const loginUserAsync = createAsyncThunk('auth/loginUser', async (user) => {
  const loginUserFullResponse = await loginUserFullService(user);
  return loginUserFullResponse;
})

export const signupClientAsync = createAsyncThunk('auth/signupClient', async (client) => {
  const signupClientResponse = await signupClientFullService(client);
  return signupClientResponse;
})

export const signunpPsychologistAsync = createAsyncThunk('auth/signupPsychologist', async (psychologist) => {
  const signupPsychologistResponse = await signupPsychologistFullService(psychologist);
  return signupPsychologistResponse;
})

export const recoveryPasswordAsync = createAsyncThunk('auth/resetPassword', async(email) => {
  const recoveryPasswordResponse = await recoveryPasswordFirebaseService(email);
  return recoveryPasswordResponse;
})

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    isSuccess: false,
    errorData: null,
  } ,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    setIsLoading: (state,action) => {
      state.isLoading = action.payload;
    },
    setErrorData: (state,action) => {
      state.errorData = action.payload;
    },
    cleanErrorData: (state) => {
      state.errorData = null;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginUserAsync.pending,(state, action) => {
      state.isLoading = true;
    })
    .addCase(loginUserAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.success;
      if (action.payload.success) {
        state.user = {...action.payload.data.user};
        localStorage.setItem('token', action.payload.data.idToken);
        localStorage.setItem('refreshToken', action.payload.data.refreshToken);
      } else {
        state.errorData = handleError(action.payload.error);
      }
    })
    .addCase(loginUserAsync.rejected, (state,action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorData = handleError(action.payload.error);
    })
    .addCase(signupClientAsync.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(signupClientAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.success;
      if (action.payload.success) {
        state.user = {...action.payload.data.user};
        localStorage.setItem('token', action.payload.data.idToken);
        localStorage.setItem('refreshToken', action.payload.data.refreshToken);
      } else {
        state.errorData = handleError(action.payload.error);
      }
    })
    .addCase(signupClientAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      // state.errorData = handleError(action.payload.error);
    })
    .addCase(signunpPsychologistAsync.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(signunpPsychologistAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.success;
      if (action.payload.success) {
        state.user = action.payload.data.user;
        localStorage.setItem('token', action.payload.data.idToken);
        localStorage.setItem('refreshToken', action.payload.data.refreshToken);
      } else {
        state.errorData = handleError(action.payload.error);
      }
    })
    .addCase(signunpPsychologistAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      // state.error = handleError(action.payload.error);
    })
    .addCase(recoveryPasswordAsync.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
    })
    .addCase(recoveryPasswordAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.success) {
        state.isSuccess = true;
      } else {
        state.isSuccess = false;
        state.errorData = handleError(action.payload.error);
      }
    })
    .addCase(recoveryPasswordAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
    })
  }
});


export const {setErrorData, cleanErrorData, setIsLoading, loginUser, logoutUser} = userSlice.actions;

// Selector
export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectErrorData = (state) => state.auth.errorData;
export const selectIsSuccess = (state) => state.auth.isSuccess;

export default userSlice.reducer;
