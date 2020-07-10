import React from 'react';
import {
  selectCurrentCurrency,
  setCurrentCurrency,
  selectVisibleCurrencies,
} from './currency.slice';

import { setKeypadValue } from '../keypad/keypad.slice';
import { useSelector, useDispatch } from 'react-redux';
import Currency from '../../components/Currency';

const CurrencyRow = ({ currencyCode }) => {
  const dispatch = useDispatch();
  const convertedValue = useSelector((state) => selectVisibleCurrencies(state)[currencyCode]);
  const isActive = useSelector((state) => selectCurrentCurrency(state) === currencyCode);

  const handleSelectCurrency = () => {
    if (isActive) return;

    dispatch(setCurrentCurrency({ currency: currencyCode }));    
    dispatch(setKeypadValue(convertedValue.toString().split('')));
  };

  return (
    <Currency
      active={isActive}
      currencyCode={currencyCode}
      currentValue={convertedValue}
      onCurrencyClick={handleSelectCurrency}
    />
  );
};

export default CurrencyRow;
