import React from 'react';
import { styled, Typography } from '@material-ui/core';

const HeaderBody = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(50%, 1fr))',
  marginBottom: '.5rem',
});

const PanelHeader = ({ title, secondary }) => {
  return (
    <HeaderBody>
      <Typography component="span" variant="h6">
        {title}
      </Typography>
      {secondary && secondary}
    </HeaderBody>
  );
};

export default PanelHeader;
