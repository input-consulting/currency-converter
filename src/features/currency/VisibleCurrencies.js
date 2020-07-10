import React from 'react';
import { selectVisibleCurrencyCodes } from './currency.slice';
import { useSelector } from 'react-redux';
import CurrencyList from '../../components/CurrencyList';
import { makeStyles } from '@material-ui/core';
import Panel from '../../components/Panel';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    margin: '.5rem 0 .5rem 0',
    padding: '.1rem',
    color: palette.primary.main,
    backgroundColor: palette.grey[200],
  },
}));

const VisibleCurrencies = ({ className, ...rest }) => {
  const currencies = useSelector(selectVisibleCurrencyCodes);
  const classes = useStyles();
  return (
    <Panel className={classes.root}>
      <CurrencyList currencies={currencies} />
    </Panel>
  );
};

export default VisibleCurrencies;
