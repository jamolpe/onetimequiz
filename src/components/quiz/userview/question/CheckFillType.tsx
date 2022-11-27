import React, { useState } from 'react';
import { TypeOption } from '../../../../services/quiz/models';
import Checker from '../../../common/Checker';

type CheckFillTypeProps = {
  options?: TypeOption[];
};

const CheckFillType = ({ options: prevOptions }: CheckFillTypeProps) => {
  const [options, setOptions] = useState<TypeOption[]>(prevOptions ?? []);
  const onChangeOption = (id: number | string) => {
    const index = options.findIndex((opt) => opt.id === id);
    if (options[index]) {
      const newOptions = [...options];
      newOptions[index] = {
        ...options[index],
        selected: !options[index].selected
      };
      setOptions(newOptions);
    }
  };
  return (
    <div>
      <Checker
        required
        name={'questionChecker'}
        items={options.map((o) => ({ label: o.text, value: o }))}
        onChange={onChangeOption}
        label={''}
        value={options}
      />
    </div>
  );
};

export default CheckFillType;
