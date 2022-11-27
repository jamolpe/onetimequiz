import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import { withFormsy } from 'formsy-react';
import { TypeOption } from '../../services/quiz/models';

import './Selector.scss';
import TextInput from './TextInput';

type SelectorType = {
  id: string;
  label?: string;
  items: {
    value: TypeOption;
    control: JSX.Element;
    label: string;
  }[];
  isRequired: boolean;
  value?: string | number;
  showError: boolean;
  errorMessage: string;
  name?: string;
  showRequired: boolean;
  disabled?: boolean;
  onSelect: (value: string | number) => void;
};

const Selector = ({
  id,
  label,
  isRequired,
  value,
  showError,
  errorMessage,
  name,
  items,
  showRequired,
  disabled = false,
  onSelect
}: SelectorType) => {
  if (isRequired && !value) {
    showError = true;
    errorMessage = 'At least one item should be selected';
  }
  return (
    <div className={(showRequired ? 'required' : '') + ' selector'}>
      {label && (
        <span>
          {label} {isRequired ? '*' : null}
        </span>
      )}
      <FormControl disabled={disabled}>
        <div className="input-selector">
          <TextInput
            label={''}
            name={name + 'Input'}
            value={showError ? '' : JSON.stringify(items.map((i) => i.value))}
          />
        </div>
        <RadioGroup
          aria-labelledby={id + '-radio'}
          name={name}
          value={value}
          onChange={(e) => onSelect(e.target.value)}
        >
          {items.map((item, i) => {
            return (
              <FormControlLabel
                key={i}
                value={item.value.id}
                control={item.control}
                label={item.label}
              />
            );
          })}
        </RadioGroup>
        <p className={'error'}>{errorMessage}</p>
      </FormControl>
    </div>
  );
};

export default withFormsy(Selector);
