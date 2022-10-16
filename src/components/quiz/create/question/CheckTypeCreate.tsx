import { Button } from '@mui/material';
import { useState } from 'react';
import Checker from '../../../common/Checker';
import TextInput from '../../../common/TextInput';

import './CheckTypeCreate.scss';
const CheckTypeCreate = () => {
  const [options, setOptions] = useState<
    {
      id: number;
      value: string | number;
      label: string | number;
      checked: boolean;
    }[]
  >([]);
  const [newOption, setNewOption] = useState<string | number>('');

  const onChangeOption = (id: number | string) => {
    const index = options.findIndex((opt) => opt.id === id);
    if (options[index]) {
      const newOptions = [...options];
      newOptions[index] = {
        ...options[index],
        checked: !options[index].checked
      };
      setOptions(newOptions);
    }
  };

  const addNewOption = () => {
    const id = options[options.length - 1]?.id;
    const newId = id !== undefined ? id + 1 : 0;
    const newOptionToAdd = {
      id: newId,
      value: newOption,
      label: newOption,
      checked: false
    };
    const newOptions = [...options, newOptionToAdd];
    setOptions(newOptions);
    setNewOption('');
  };
  return (
    <div className="type-checker">
      <Checker
        required
        name={'question-checker'}
        items={options}
        onChange={onChangeOption}
        label="New checker option"
        value={options.map((op) => ({
          id: op.id,
          label: op.label,
          checked: op.checked
        }))}
      />
      <div className="new-option">
        <TextInput
          label="New Option"
          name="newCheckerOpt"
          value={newOption}
          onChangeValue={(value) => setNewOption(value)}
        />
        <Button onClick={addNewOption}>Add</Button>
      </div>
    </div>
  );
};

export default CheckTypeCreate;
