import React, { useEffect } from 'react';
import { selectBusy } from './app.slice';
import { useSelector, useDispatch } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CssBaseline } from '@material-ui/core';

import CurrencyTools from '../../components/CurrencyTools';
import KeyPad from '../../features/keypad';
import VisibleCurrencies from '../../features/currency/VisibleCurrencies';
import { updateCurrencyRates } from '../../features/currency/currency.slice';

import theme from './app.theme';

const Loading = styled('h1')(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',
}));

const App = () => {
  const dispatch = useDispatch();
  const busy = useSelector(selectBusy);

  useEffect(() => {
    dispatch(updateCurrencyRates());
  }, [dispatch]);

  if (busy) return <Loading>Loading rates ....</Loading>;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <VisibleCurrencies />
        <CurrencyTools />
        <KeyPad />
      </Container>
    </ThemeProvider>
  );
};

export default App;
