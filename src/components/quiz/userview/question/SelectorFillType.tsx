import { Radio } from '@mui/material';
import React, { useState } from 'react';
import { TypeOption } from '../../../../services/quiz/models';
import Selector from '../../../common/Selector';

type SelectorFillTypeProps = {
  options?: TypeOption[];
};

const SelectorFillType = ({ options }: SelectorFillTypeProps) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  return (
    <div>
      {options && (
        <Selector
          required
          name="questionSelector"
          id="questionSelector"
          items={options.map((op, i) => ({
            value: op,
            control: <Radio key={i} />,
            label: op.text
          }))}
          label={''}
          value={selectedOption}
          onSelect={(val) => {
            console.log(val);
            setSelectedOption(val.toString());
          }}
        />
      )}
    </div>
  );
};

export default SelectorFillType;
