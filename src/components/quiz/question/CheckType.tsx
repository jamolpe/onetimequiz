import { Button } from '@mui/material';
import { useState } from 'react';
import { TypeOption } from '../../../services/quiz/models';
import Checker from '../../common/Checker';
import TextInput from '../../common/TextInput';

import './CheckType.scss';

type CheckTypeProps = {
  prevOptions?: TypeOption[];
  viewMode?: boolean;
};

const CheckType = ({ prevOptions, viewMode = false }: CheckTypeProps) => {
  const [options, setOptions] = useState<TypeOption[]>(prevOptions ?? []);
  const [newOption, setNewOption] = useState<string>('');

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

  const addNewOption = () => {
    const newOptionToAdd: TypeOption = {
      id: options.length + 1,
      text: newOption,
      selected: false
    };
    const newOptions = [...options, newOptionToAdd];
    setOptions(newOptions);
    setNewOption('');
  };
  return (
    <div className="type-checker">
      <Checker
        required
        disabled={viewMode}
        name={'questionChecker'}
        items={options.map((o) => ({ label: o.text, value: o }))}
        onChange={onChangeOption}
        label={!viewMode ? 'New checker option' : ''}
        value={options}
      />
      {!viewMode && (
        <div className="new-option">
          <TextInput
            label="New Option"
            name="newCheckerOpt"
            value={newOption}
            onChangeValue={(value) => setNewOption(value)}
          />
          <Button onClick={addNewOption}>Add</Button>
        </div>
      )}
    </div>
  );
};

export default CheckType;
