import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialBalance = 0;

const balanceSlice = createSlice({
  name: 'balance',
  initialState: initialBalance,
  reducers: {
    deposit: (state, action) => state + action.payload,
    withdraw: (state, action) => state - action.payload,
  },
});

export const { deposit, withdraw } = balanceSlice.actions;

export default configureStore({
  reducer: {
    balance: balanceSlice.reducer,
  },
});
