import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    margin: '.5rem 0 .5rem 0',
    padding: '1rem',
    color: palette.primary.main,
    backgroundColor: palette.grey[200],
  },
}));

const Panel = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.root} {...rest}>
      {children}
    </Paper>
  );
};

export default Panel;
