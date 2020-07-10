import { createSlice, createSelector } from '@reduxjs/toolkit';
import { round } from '../../application/round';

import { selectCurrentAmount } from '../../features/currency/currency.slice';
import { selectTipAmount } from '../tip/tip.slice';

export const slice = createSlice({
  name: 'split',
  initialState: {
    split: 1,
  },
  reducers: {
    setSplit: (state, action) => {
      state.split = action.payload;
    },
  },
});

// export reducer
//
export default slice.reducer;

// export selectors
//
export const selectSplit = (state) => state.split.split;
export const selectSplitAmount = createSelector(
  selectSplit,
  selectTipAmount,
  selectCurrentAmount,
  (split, tipValue, currentValue) => round((tipValue || currentValue) / split, 2)
);

// export actions
//
export const { setSplit } = slice.actions;

