import React from 'react';
import Tip from '../features/tip';
import Split from '../features/split';
import { useSelector } from 'react-redux';
import { selectShowTip, selectShowSplit } from '../features/app/app.slice';
import Panel from './Panel';

const CurrencyTools = () => {
  const showTip = useSelector(selectShowTip);
  const showSplit = useSelector(selectShowSplit);

  if (!showTip && !showSplit) return null;

  return (
    <Panel>
      {showTip && <Tip />}
      {showSplit && <Split />}
    </Panel>
  );
};

export default CurrencyTools;
