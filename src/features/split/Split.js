import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { selectSplitAmount, selectSplit, setSplit } from './split.slice';
import Amount from '../../components/Amount';
import Buttons from '../../components/Buttons';
import PanelHeader from '../../components/PanelHeader';
import { Box } from '@material-ui/core';

const Split = () => {
  const dispatch = useDispatch();

  const splitAmount = useSelector(selectSplitAmount);
  const split = useSelector(selectSplit);

  const handleOnClick = (value) => () => {
    dispatch(setSplit(parseInt(value || 1)));
  };

  return (
    <Box>
      <PanelHeader title="Split" secondary={<Amount variant="h6">{splitAmount}</Amount>} />
      <Buttons>
        {[1, 2, 3, 4, 5].map((value, index) => (
          <Button
            variant={split === value ? 'contained' : 'outlined'}
            color="secondary"
            key={index}
            onClick={handleOnClick(value)}
          >
            {value}
          </Button>
        ))}
      </Buttons>
    </Box>
  );
};

export default Split;
