import { createSlice } from '@reduxjs/toolkit';
import { toggleTip, toggleSplit } from '../app/app.slice';

export const slice = createSlice({
  name: 'keypad',
  initialState: {
    value: [],
  },
  reducers: {
    pushKeypadValue: (state, action) => {
      state.value.push(action.payload);
    },
    popKeypadValue: (state, action) => {
      state.value = state.value.slice(0, action.payload);
    },
    setKeypadValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// export reducer
//
export default slice.reducer;

// export selectors
//
export const selectKeypadValue = (state) => state.keypad.value;

// export actions
//
export const { pushKeypadValue, popKeypadValue, setKeypadValue } = slice.actions;

// export thunk's
//
export const updateCurrentValue = (value) => {
  return (dispatch, getState) => {
    const state = getState().keypad;

    if (/\d|[.]/.test(value)) {
      if (state.value.find((x) => x === '.') && value === '.') return;
      if (value === '0' && state.value.length === 0) return;
      dispatch(slice.actions.pushKeypadValue(value));
    } else {
      switch (value.toUpperCase()) {
        case '⌫': {
          const index = state.value[state.value.length - 2] === '.' ? 2 : 1;
          const length = state.value.length - index;
          dispatch(slice.actions.popKeypadValue(length));
          break;
        }
        case 'C': {
          dispatch(slice.actions.setKeypadValue([]));
          break;
        }
        case 'TIP': {
          dispatch(toggleTip());
          break;
        }
        case 'SPLIT': {
          dispatch(toggleSplit());
          break;
        }
        default:
          break;
      }
    }
  };
};
