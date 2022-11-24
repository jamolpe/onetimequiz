import React from 'react';
import { TypeOption } from '../../../../services/quiz/models';

type CheckFillTypeProps = {
  options?: TypeOption[];
};

const CheckFillType = ({ options }: CheckFillTypeProps) => {
  return (
    <div>
      {options &&
        options.map((op) => {
          return <div>{op.text}</div>;
        })}
    </div>
  );
};

export default CheckFillType;
