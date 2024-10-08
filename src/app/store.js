import { configureStore } from '@reduxjs/toolkit';
import rechargePlansReducer from '../features/recharge'; // Adjust the import path as necessary
import paymentReducer from '../features/payment';
import transactionHistoryReducer from '../features/transactionHistory'
import dthReducer from "../features/dth"
const store = configureStore({
  reducer: {
    rechargePlans: rechargePlansReducer, // Add your reducer here
    dthRecharge: dthReducer,
    payment:paymentReducer,
    transactionHistory:transactionHistoryReducer

  },
});

export default store;
