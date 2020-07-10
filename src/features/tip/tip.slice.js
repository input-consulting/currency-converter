import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectCurrentAmount } from '../../features/currency/currency.slice';
import { round } from '../../application/round';

export const slice = createSlice({
  name: 'tip',
  initialState: {
    tipPercentage: 0,
  },
  reducers: {
    setTipPercentage: (state, action) => {
      state.tipPercentage = action.payload;
    },
  },
});

// export selectors
//
export const selectTipPercentage = (state) => state.tip.tipPercentage;
export const selectTipAmount = createSelector(
  selectTipPercentage,
  selectCurrentAmount,
  (percentage, amount) => round(amount * (percentage / 100) + amount, 2)
);

// export actions
//
export const { setTipPercentage } = slice.actions;

// export reducer
//
export default slice.reducer;
