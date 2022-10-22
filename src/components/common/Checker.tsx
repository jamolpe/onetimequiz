import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import { withFormsy } from 'formsy-react';

import './Checker.scss';
import TextInput from './TextInput';

type CheckerType = {
  label?: string;
  items: {
    id: number | string;
    value: string | number;
    label: string | number;
    checked: boolean;
  }[];
  isRequired: boolean;
  value?: {
    id: number | string;
    label: string | number;
    checked: boolean;
  }[];
  showError: boolean;
  errorMessage: string;
  name?: string;
  showRequired: boolean;
  required: boolean;
  onChange: (value: string | number) => void;
};

const Checker = ({
  label,
  isRequired,
  showError,
  errorMessage,
  name,
  items,
  showRequired,
  required,
  onChange
}: CheckerType) => {
  const checked = items.filter((item) => item.checked);
  if (isRequired && checked.length === 0) {
    showError = true;
    errorMessage = 'At least one item shoud be selected';
  }
  return (
    <div className={(showRequired ? 'required' : '') + ' checker'}>
      {label && (
        <span>
          {label} {isRequired ? '*' : null}
        </span>
      )}
      <FormControl>
        <div className="input-checker">
          <TextInput
            required={required}
            label={''}
            name={name + 'Input'}
            value={showError ? '' : JSON.stringify(checked)}
          />
        </div>

        {items.map((item) => {
          return (
            <FormControlLabel
              key={item.id}
              value={item.value}
              control={
                <Checkbox
                  name={name}
                  checked={item.checked}
                  onChange={() => onChange(item.id)}
                />
              }
              label={item.label}
            />
          );
        })}
        <p className={showError ? 'error' : 'hidde'}>{errorMessage}</p>
      </FormControl>
    </div>
  );
};

export default withFormsy(Checker);
