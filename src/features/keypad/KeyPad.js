import React, { useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { updateKeyboardValue } from './keypad.slice';

const Keys = styled('div')({
  marginTop: '.5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(4,minmax(4rem, 1fr))',
  gridGap: '.5rem',
});

const merge = {
  gridColumn: '1 / span 2',
};

const isDigit = (value) => /\d|[.]/.test(value);

const Key = ({ value, onClick, ...rest }) => {
  return (
    <Button variant="contained" color={isDigit(value) ? 'primary' : 'default'} {...rest} onClick={onClick(value)}>
      {value}
    </Button>
  );
};

const KeyPad = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  });

  const doUpdateKeyboardValue = (value) => {
    dispatch(updateKeyboardValue(value));
  };

  const onKeyDown = (e) => {
    if (!isDigit(e.key)) return;
    doUpdateKeyboardValue(e.key);
  };

  const onKeyPressed = (value) => (e) => {
    e.preventDefault();
    doUpdateKeyboardValue(value || null);
  };

  return (
    <Keys>
      <Key value="7" onClick={onKeyPressed} />
      <Key value="8" onClick={onKeyPressed} />
      <Key value="9" onClick={onKeyPressed} />
      <Key value="C" onClick={onKeyPressed} />

      <Key value="4" onClick={onKeyPressed} />
      <Key value="5" onClick={onKeyPressed} />
      <Key value="6" onClick={onKeyPressed} />
      <Key value="⌫" onClick={onKeyPressed} />

      <Key value="1" onClick={onKeyPressed} />
      <Key value="2" onClick={onKeyPressed} />
      <Key value="3" onClick={onKeyPressed} />
      <Key value="Tip" onClick={onKeyPressed} />

      <Key value="0" onClick={onKeyPressed} style={merge} />
      <Key value="." onClick={onKeyPressed} />
      <Key value="split" onClick={onKeyPressed} />
    </Keys>
  );
};

export default KeyPad;
