import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  dthRechargePlans: [],
  loading: false,
  error: null,
  dthRechargeSuccess: false,
  dthRechargeData: null,
};

// Fetch DTH recharge plans from the server
export const fetchDTHRechargePlans = createAsyncThunk(
  "dthPlans/fetchDTHRechargePlans",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:7777/dth/get-dth-plans");
      if (!response.ok) {
        throw new Error("Failed to fetch DTH recharge plans");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Make a DTH recharge
export const makeDTHRecharge = createAsyncThunk(
  "dthRecharge/makeDTHRecharge",
  async (rechargeData, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:7777/recharge/make-recharge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rechargeData),
      });

      if (!response.ok) {
        throw new Error("Failed to make DTH recharge");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice
const dthRechargeSlice = createSlice({
  name: "dthRecharge",
  initialState,
  reducers: {
    resetDTHRechargeStatus: (state) => {
      state.dthRechargeSuccess = false;
      state.error = null;
    },
    addDTHRechargeData: (state,action)=>{
        let { payload: dthRechargeData} = action;
        state.dthRechargeData = dthRechargeData;
        
      }
  },
  extraReducers: (builder) => {
    builder
      // Fetch DTH Plans Reducers
      .addCase(fetchDTHRechargePlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDTHRechargePlans.fulfilled, (state, action) => {
        state.loading = false;
        state.dthRechargePlans = action.payload;
      })
      .addCase(fetchDTHRechargePlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Make DTH Recharge Reducers
      .addCase(makeDTHRecharge.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(makeDTHRecharge.fulfilled, (state, action) => {
        state.loading = false;
        state.dthRechargeSuccess = true;
        state.dthRechargeData = action.payload;
      })
      .addCase(makeDTHRecharge.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { resetDTHRechargeStatus,addDTHRechargeData } = dthRechargeSlice.actions;
export default dthRechargeSlice.reducer;
