import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import { withFormsy } from 'formsy-react';

import './Selector.scss';
import TextInput from './TextInput';

type SelectorType = {
  id: string;
  label?: string;
  items: {
    value: string | number;
    control: JSX.Element;
    label: string | number;
  }[];
  isRequired: boolean;
  value?: string | number;
  showError: boolean;
  errorMessage: string;
  name?: string;
  showRequired: boolean;
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
  onSelect
}: SelectorType) => {
  return (
    <div className={(showRequired ? 'required' : '') + ' selector'}>
      {label && (
        <span>
          {label} {isRequired ? '*' : null}
        </span>
      )}
      <FormControl>
        <div className="input-selector">
          <TextInput
            label={''}
            name={name + 'Input'}
            value={
              showError ? '' : JSON.stringify(items.map((item) => item.value))
            }
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
                value={item.value}
                control={item.control}
                label={item.label}
              />
            );
          })}
        </RadioGroup>
        <p className={showError ? 'error' : 'hidde'}>{errorMessage}</p>
      </FormControl>
    </div>
  );
};

export default withFormsy(Selector);
