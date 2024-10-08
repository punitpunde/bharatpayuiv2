import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  paymentFailed: "",
  paymentSuccess: false,
  paymentDetails: null,
};

export const makePayment = createAsyncThunk(
  "payment/process",
  async (paymentDetails, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:7777/money-transfer/transfer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentDetails),
        }
      );

      if (!response.ok) {
        throw new Error("Payment failed");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    resetPaymentStatus: (state) => {
      state.paymentSuccess = false;
    },
    addPaymentDetails: (state, action) => {
      state.paymentDetails = action.payload; // Store payment data (amount, UPI IDs, etc.)
    },
    resetpaymentFailed: (state) => {
      state.paymentFailed = ""; // Reset paymentFailed state
    },
    resetState: (state) => {
      state.loading = false;
      state.paymentFailed = "";
      state.paymentSuccess = false;
      state.paymentDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Make Payment
      .addCase(makePayment.pending, (state) => {
        state.loading = true;
        state.paymentFailed = ""; // Reset paymentFailed before initiating payment
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentSuccess = true; // Mark payment as successful
      })
      .addCase(makePayment.rejected, (state, action) => {
        state.loading = false;
        state.paymentFailed = action.error.message || "Payment failed"; // Handle payment failure
      });
  },
});

export const { resetPaymentStatus, addPaymentDetails, resetError, resetState } =
  paymentSlice.actions;
export default paymentSlice.reducer;
