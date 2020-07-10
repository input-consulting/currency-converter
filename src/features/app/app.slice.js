import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'app',
  initialState: {
    busy: false,
    showTip: false,
    showSplit: false,
  },
  reducers: {
    setBusy: (state, action) => {
      state.busy = action.payload;
    },
    toggleSplit: (state, action) => {
      state.showSplit = !state.showSplit;
    },
    toggleTip: (state, action) => {
      state.showTip = !state.showTip;
    },
  },
});

// export reducer
//
export default slice.reducer;

// export selectors
//
export const selectBusy = (state) => state.app.busy;
export const selectShowTip = (state) => state.app.showTip;
export const selectShowSplit = (state) => state.app.showSplit;

// export actions
//
export const { setBusy, toggleSplit, toggleTip } = slice.actions;

