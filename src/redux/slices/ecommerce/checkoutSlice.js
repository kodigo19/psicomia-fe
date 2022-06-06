import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createPreference, savePaymentResponse} from "../../../utils/api/services/ecommerce/checkout";

const initialState = {};

export const createPreferenceAsync = createAsyncThunk("createPreference", async (preference) => {
  const preferenceResponse = await createPreference(preference);
  return preferenceResponse;
});

export const savePaymentResponseAsync = createAsyncThunk("savePaymentResponse", async (paymentResponse) => {
  return await savePaymentResponse(paymentResponse);
});

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setSuccessPaymentResponse: (state, action) => {
      state.paymentStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPreferenceAsync.fulfilled, (state, action) => {
        state.preferenceId = action.payload.id;
        state.preferenceData = action.payload.preference;
      })
      .addCase(savePaymentResponseAsync.fulfilled, (state, action) => {
        state.savedPaymentStatus = action.payload;
      })
  }
});

export const { setSuccessPaymentResponse } = checkoutSlice.actions;

// Selectors
export const selectPaymentStatus = (state) => state.checkout.paymentStatus;
export const selectPreferenceId = (state) => state.checkout.preferenceId;
export const selectPreferenceData = (state) => state.checkout.preferenceData;
export const selectSavedPaymentStatus = (state) => state.checkout.savedPaymentStatus;

export default checkoutSlice.reducer;