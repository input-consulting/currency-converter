import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrencyRates } from '../../api/fetchCurrencyRates';
import { round } from '../../application/round';
import { setBusy } from '../app/app.slice';

export const slice = createSlice({
  name: 'currency',
  initialState: {
    currentCurrency: 'SEK',
    baseRate: 'USD',
    visibleCurrencies: { EUR: 0, SEK: 0, GBP: 0, THB: 0, USD: 0 },
    rates: {},
  },
  reducers: {
    setCurrentCurrency: (state, action) => {
      const { currency } = action.payload;
      state.currentCurrency = currency;
    },
    updateCurrencyRates: (state, action) => {
      state.rates = action.payload;
    },
    setCurrencyConversion: (state, action) => {
      state.visibleCurrencies = action.payload;
    },
  },
});

// export reducer
//
export default slice.reducer;

// export selectors
//
export const selectVisibleCurrencyCodes = (state) => Object.keys(state.currency.visibleCurrencies);
export const selectVisibleCurrencies = (state) => state.currency.visibleCurrencies;
export const selectCurrentCurrency = (state) => state.currency.currentCurrency;

export const selectCurrentAmount = (state) =>
  parseFloat(state.currency.visibleCurrencies[state.currency.currentCurrency]);

// export actions
//
export const { setCurrentCurrency } = slice.actions;

// export thunk's
//
export const updateCurrencyRates = () => async (dispatch) => {
  try {
    dispatch(setBusy(true));
    const rates = await fetchCurrencyRates();
    dispatch(slice.actions.updateCurrencyRates(rates));
  } catch (error) {
    // dispatch an error messsage
  } finally {
    dispatch(setBusy(false));
  }
};

const getRate = (baseRate, rates, from, to) => {
  if (from === baseRate) return rates[to];
  if (to === baseRate) return 1 / rates[from];
  return rates[to] * (1 / rates[from]);
};

export const convertCurrencies = () => async (dispatch, getState) => {
  const { visibleCurrencies, baseRate, rates, currentCurrency } = getState().currency;
  const { value } = getState().keypad;

  const payload = {};
  for (const currencyCode in visibleCurrencies) {
    const keypadValue = parseFloat(value.join(''));
    if (isNaN(keypadValue)) {
      payload[currencyCode] = '0';
    } else if (currencyCode === currentCurrency) {
      payload[currencyCode] = keypadValue;
    } else {
      const currencyValue = keypadValue * getRate(baseRate, rates, currentCurrency, currencyCode);
      const fixed = isFinite(currencyValue) && Math.floor(currencyValue) === currencyValue ? 0 : 2;
      payload[currencyCode] = parseFloat(round(currencyValue,2).toFixed(fixed));
    }
  }

  dispatch(slice.actions.setCurrencyConversion(payload));
};
