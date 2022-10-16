import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import { withFormsy } from 'formsy-react';

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
  onChange
}: CheckerType) => {
  return (
    <div className={(showRequired ? 'required' : '') + ' checker'}>
      {label && (
        <span>
          {label} {isRequired ? '*' : null}
        </span>
      )}
      <FormControl>
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
