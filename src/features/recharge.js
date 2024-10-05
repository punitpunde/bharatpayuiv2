import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  rechargePlans: [],
  loading: false,
  error: ""
};

const fetchRechargePlans = createAsyncThunk(
  "rechargePlans/fetch",
  async (operator) => {
    const url = "http://localhost:7777/recharge/recharge-plans/RJ/AP"; 
    const response = await fetch(url);
    return response.json(); 
  }
);

const rechargeSlice = createSlice({
  name: "rechargePlans",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRechargePlans.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRechargePlans.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false on fulfilled
        state.rechargePlans = action.payload; // Set fetched data
      })
      .addCase(fetchRechargePlans.rejected, (state,action) => {
        state.loading = false; // Set loading to false on rejected
        state.error = action.error.message; // Mark as rejected
      });
  },
});

// Export the async thunk and reducer
export { fetchRechargePlans };
export default rechargeSlice.reducer;
