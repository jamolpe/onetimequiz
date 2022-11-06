import { Button, Radio } from '@mui/material';
import { useState } from 'react';
import Selector from '../../common/Selector';
import TextInput from '../../common/TextInput';
import { TypeOption } from '../../../services/quiz/models';
import './SelectorType.scss';

type SelectorTypeProps = {
  prevSelectedOption?: string;
  prevOptions?: TypeOption[];
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
  const [options, setOptions] = useState<TypeOption[]>(prevOptions ?? []);
  const [newOption, setNewOption] = useState<string>('');

  const addNewOption = () => {
    const newOptions = [
      ...options,
      { id: options.length + 1, text: newOption }
    ];
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
        items={options.map((op, i) => ({
          value: op,
          control: <Radio key={i} />,
          label: op.text
        }))}
        label={!viewMode ? 'New selector option' : ''}
        value={selectedOption}
        onSelect={(val) => setSelectedOption(val.toString())}
      />
      {!viewMode && (
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
