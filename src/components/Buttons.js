import { styled } from '@material-ui/core';

const Buttons = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(6rem, 1fr))',
  gridGap: '0.5rem',
  paddingBottom: '.5rem',
}));

export default Buttons;
