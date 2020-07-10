import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { selectTipAmount, selectTipPercentage, setTipPercentage } from './tip.slice';
import Amount from '../../components/Amount';
import Buttons from '../../components/Buttons';
import PanelHeader from '../../components/PanelHeader';
import { Box } from '@material-ui/core';

const Tip = () => {
  const dispatch = useDispatch();

  const tipAmount = useSelector(selectTipAmount);
  const tipPercentage = useSelector(selectTipPercentage);

  const onTipClick = (value) => () => {
    dispatch(setTipPercentage(parseInt(value || 0)));
  };

  return (
    <Box>
      <PanelHeader title="Tip" secondary={<Amount variant="h6">{tipAmount}</Amount>} />
      <Buttons>
        {[0, 5, 10, 15, 20].map((x, index) => (
          <Button
            variant={tipPercentage === x ? 'contained' : 'outlined'}
            color="primary"
            key={index}
            onClick={onTipClick(x)}
          >
            {x}%
          </Button>
        ))}
      </Buttons>
    </Box>
  );
};

export default Tip;
