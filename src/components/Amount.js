import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    justifySelf: 'right',
    alignSelf: 'center',
    marginRight: '.5rem',
    fontWeight: 'bolder',
  },
}));

const Amount = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <Typography component="span" {...rest} className={classes.root}>
      {children}
    </Typography>
  );
};

export default Amount;
