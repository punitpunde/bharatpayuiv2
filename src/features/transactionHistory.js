import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  transactionHistoryRequestFailed: "",
  transactionHistoryRequestSuccess: false,
  transactionHistory: null,
  transactionHistoryRequestDetails: null,
};

export const getTransactionHistory = createAsyncThunk(
  "transactionHistory/process",
  async (transactionHistoryRequestDetails, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:7777/money-transfer/transaction-history`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transactionHistoryRequestDetails), 
        }
      );

      if (!response.ok) {
        throw new Error("Transaction History request failed");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const transactionHistorySlice = createSlice({
  name: "transactionHistory",
  initialState,
  reducers: {
    resetTransactionRequestSuccessStatus: (state) => {
      state.transactionRequestSuccess = false;
    },
    addTransactionHistoryRequestDetails: (state, action) => {
      state.transactionHistoryRequestDetails = action.payload;
    },
    resetTransactionHistoryRequestFailed: (state) => {
      state.transactionHistoryRequestFailed = "";
    },
    resetState: (state) => {
      state.loading = false;
      state.transactionHistoryRequestFailed = "";
      state.transactionRequestSuccess = false;
      state.transactionHistory = null;
      state.transactionHistoryRequestDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTransactionHistory.pending, (state) => {
        state.loading = true;
        state.transactionHistoryRequestFailed = "";
      })
      .addCase(getTransactionHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.transactionHistory = action.payload;
        state.transactionHistoryRequestSuccess = true;
      })
      .addCase(getTransactionHistory.rejected, (state, action) => {
        state.loading = false;
        state.transactionHistoryRequestFailed = action.payload || "Transaction history fetch failed";
      });
  },
});

export const {
  resetTransactionHistoryRequestFailed,
  resetTransactionRequestSuccessStatus,
  addTransactionHistoryRequestDetails,
  resetState,
} = transactionHistorySlice.actions;

export default transactionHistorySlice.reducer;
