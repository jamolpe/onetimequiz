import { Button, Radio } from '@mui/material';
import { useState } from 'react';
import Selector from '../../common/Selector';
import TextInput from '../../common/TextInput';

import './SelectorType.scss';

type SelectorTypeProps = {
  prevSelectedOption?: string;
  prevOptions?: (string | number)[];
  viewMode?: boolean;
};

const SelectorType = ({
  prevSelectedOption,
  prevOptions,
  viewMode = false
}: SelectorTypeProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    prevSelectedOption ?? ''
  );
  const [options, setOptions] = useState<(string | number)[]>(
    prevOptions ?? []
  );
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
        disabled={viewMode}
        name="questionSelector"
        id="questionSelector"
        items={options.map((op) => ({
          value: op,
          control: <Radio />,
          label: op
        }))}
        label="New selector option"
        value={selectedOption}
        onSelect={(val) => setSelectedOption(val.toString())}
      />
      {viewMode && (
        <div className="new-option">
          <TextInput
            label="New Option"
            name="newSelectorOpt"
            value={newOption}
            onChangeValue={(value) => setNewOption(value)}
          />
          <Button onClick={addNewOption}>Add</Button>
        </div>
      )}
    </div>
  );
};

export default SelectorType;
