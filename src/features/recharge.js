import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";
const initialState = {
  rechargePlans: [],
  loading: false,
  error: "",
  rechargeSuccess: false,
  rechargeData: null,
};

export const fetchRechargePlans = createAsyncThunk(
  "rechargePlans/fetch",
  async (operator) => {
    const url = BASE_URL+"/recharge/recharge-plans/AJ/AP"
    const response = await fetch(url);
    return response.json();
  }
);

export const makeRecharge = createAsyncThunk(
  "rechargePlans/makeRecharge",
  async (rechargeData) => {
    const url = BASE_URL+"/recharge/make-recharge";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rechargeData),
    });

    return response.json();
  }
);

const rechargeSlice = createSlice({
  name: "rechargePlans",
  initialState,
  reducers: {
    resetRechargeStatus: (state) => {
      state.rechargeSuccess = false;
    },
    addRechargeData: (state, action) => {
      let { payload: rechargeData } = action;
      state.rechargeData = rechargeData;
    },
    resetRechargeState: (state) => {
      state.rechargePlans = [];
      state.loading = false;
      state.error = "";
      state.rechargeSuccess = false;
      state.rechargeData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRechargePlans.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchRechargePlans.fulfilled, (state, action) => {
        state.loading = false;
        state.rechargePlans = action.payload;
      })
      .addCase(fetchRechargePlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(makeRecharge.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(makeRecharge.fulfilled, (state, action) => {
        state.loading = false;
        state.rechargeSuccess = true;
      })
      .addCase(makeRecharge.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetRechargeStatus, addRechargeData,resetRechargeState } = rechargeSlice.actions;
export default rechargeSlice.reducer;
