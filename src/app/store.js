import { configureStore } from '@reduxjs/toolkit';
import rechargePlansReducer from '../features/recharge'; // Adjust the import path as necessary
import paymentReducer from '../features/payment';
const store = configureStore({
  reducer: {
    rechargePlans: rechargePlansReducer, // Add your reducer here
    payment:paymentReducer
  },
});

export default store;
