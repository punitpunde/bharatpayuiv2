import { configureStore } from '@reduxjs/toolkit';
import rechargePlansReducer from '../features/recharge'; // Adjust the import path as necessary

const store = configureStore({
  reducer: {
    rechargePlans: rechargePlansReducer, // Add your reducer here
  },
});

export default store;
