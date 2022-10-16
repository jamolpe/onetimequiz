import { Button, Radio } from '@mui/material';
import { useState } from 'react';
import Selector from '../../../common/Selector';
import TextInput from '../../../common/TextInput';

import './SelectorTypeCreate.scss';
const SelectorTypeCreate = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [options, setOptions] = useState<(string | number)[]>([]);
  const [newOption, setNewOption] = useState<string | number>('');

  const addNewOption = () => {
    const newOptions = [...options, newOption];
    setOptions(newOptions);
    setNewOption('');
  };
  return (
    <div className="type-selector">
      <Selector
        required
        name="question-selector"
        id="question-selector"
        items={options.map((op) => ({
          value: op,
          control: <Radio />,
          label: op
        }))}
        label="New selector option"
        value={selectedOption}
        onSelect={(val) => setSelectedOption(val.toString())}
      />
      <div className="new-option">
        <TextInput
          label="New Option"
          name="newSelectorOpt"
          value={newOption}
          onChangeValue={(value) => setNewOption(value)}
        />
        <Button onClick={addNewOption}>Add</Button>
      </div>
    </div>
  );
};

export default SelectorTypeCreate;
