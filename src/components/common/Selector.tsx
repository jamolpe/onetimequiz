import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import { withFormsy } from 'formsy-react';

import './Selector.scss';

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
        <RadioGroup
          aria-labelledby={id + '-radio'}
          name={name}
          value={value}
          onChange={(e) => onSelect(e.target.value)}
        >
          {items.map((item) => {
            return (
              <FormControlLabel
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
