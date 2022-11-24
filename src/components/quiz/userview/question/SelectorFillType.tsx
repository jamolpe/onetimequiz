import React from 'react';
import { TypeOption } from '../../../../services/quiz/models';

type SelectorFillTypeProps = {
  options?: TypeOption[];
};

const SelectorFillType = ({ options }: SelectorFillTypeProps) => {
  return (
    <div>
      {options &&
        options.map((op) => {
          return <div>{op.text}</div>;
        })}
    </div>
  );
};

export default SelectorFillType;
