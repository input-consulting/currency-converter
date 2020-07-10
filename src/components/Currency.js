import React from 'react';
import { makeStyles, ListItem, Typography } from '@material-ui/core';
import Amount from './Amount';

const useStyles = makeStyles(({ palette }) => ({
  root: ({ active }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2,minmax(4rem, 1fr))',
    gridColumn: '1 / span 2',
    color: palette.primary.main,
    backgroundColor: active ? palette.highlight.main : palette.grey[200],
  }),
  currencyCode: ({ active }) => ({
    color: palette.primary,
    fontWeight: active ? 'bolder' : 'normal',
  }),
  secondaryItem: ({ active }) => ({
    fontWeight: active ? 'bolder' : 'normal',
    textAlign: 'right',
  }),
}));

const Currency = ({ active, currencyCode, currentValue, onCurrencyClick }) => {
  const styles = useStyles({ active: active });

  return (
    <ListItem onClick={onCurrencyClick} className={styles.root}>
      <Typography component="span" variant="h4" className={styles.currencyCode}>
        {currencyCode}
      </Typography>
      <Typography component="span" variant="h4" className={styles.secondaryItem}>
        <Amount variant="h4">{currentValue}</Amount>
      </Typography>
    </ListItem>
  );
};

export default Currency;
