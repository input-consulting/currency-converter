import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appReducer from '../features/app/app.slice';
import tipReducer from '../features/tip/tip.slice';
import splitReducer from '../features/split/split.slice';
import keypadReducer from '../features/keypad/keypad.slice';
import currencyReducer from '../features/currency/currency.slice';

export default configureStore({
  reducer: {
    app: appReducer,
    currency: currencyReducer,
    tip: tipReducer,
    split: splitReducer,
    keypad: keypadReducer,
  },
  middleware: [...getDefaultMiddleware()],
});
