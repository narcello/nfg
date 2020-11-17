import React from 'react';
import {Line} from './Lines.styles';

function Lines() {
  const lines = [];

  const isOddLine = (lineNumber: number): boolean => lineNumber % 2 === 1;
  const isFirstLine = (lineNumber: number): boolean => lineNumber === 1;

  for (let i = 1; i <= 24; i++) {
    if (isOddLine(i) && !isFirstLine(i))
      lines.push(<Line key={`line-${i}`} gridRow={i} />);
  }
  return <>{lines}</>;
}

export default Lines;
