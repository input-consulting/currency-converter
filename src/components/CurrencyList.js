import React from 'react';
import { styled } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import CurrencyRow from '../features/currency/CurrencyRow';

const CurrencyContainer = styled(List)({
  padding: 0,
  margin: 0,
  cursor: 'pointer',
});

const CurrencyList = ({ currencies }) => {
  return (
    <CurrencyContainer>
      {currencies.map((currency) => (
        <CurrencyRow key={currency} currencyCode={currency} />
      ))}
    </CurrencyContainer>
  );
};

export default CurrencyList;
