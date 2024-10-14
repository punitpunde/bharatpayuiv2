// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import rechargePlansReducer from '../features/recharge'; // Adjust the import path as necessary
import paymentReducer from '../features/payment';
import transactionHistoryReducer from '../features/transactionHistory';
import dthReducer from "../features/dth";
import securityReducer from '../features/security'; // Import the security slice

const store = configureStore({
  reducer: {
    rechargePlans: rechargePlansReducer,
    dthRecharge: dthReducer,
    payment: paymentReducer,
    transactionHistory: transactionHistoryReducer,
    auth: securityReducer, // Add the security reducer here
  },
});

export default store;
