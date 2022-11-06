import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import { withFormsy } from 'formsy-react';
import { TypeOption } from '../../services/quiz/models';

import './Checker.scss';
import TextInput from './TextInput';

type CheckerType = {
  label?: string;
  items: { value: TypeOption; label: string }[];
  isRequired: boolean;
  value?: { value: TypeOption; label: string }[];
  showError: boolean;
  errorMessage: string;
  name?: string;
  showRequired: boolean;
  required: boolean;
  disabled?: boolean;
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
  disabled = false,
  onChange
}: CheckerType) => {
  const checked = items.filter((item) => item.value.selected);
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
      <FormControl disabled={disabled}>
        <div className="input-checker">
          <TextInput
            required={required}
            label={''}
            name={name + 'Input'}
            value={showError ? '' : JSON.stringify(checked)}
          />
        </div>

        {items.map((item, i) => {
          return (
            <FormControlLabel
              key={i}
              value={item.value}
              control={
                <Checkbox
                  name={name}
                  checked={item.value.selected}
                  onChange={() => onChange(item.value.id)}
                />
              }
              label={item.label}
            />
          );
        })}
        <p className={showError ? 'error' : 'hide'}>{errorMessage}</p>
      </FormControl>
    </div>
  );
};

export default withFormsy(Checker);
