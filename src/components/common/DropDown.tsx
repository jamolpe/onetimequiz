import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { withFormsy } from 'formsy-react';
import React from 'react';

type DropDownType = {
  id: string;
  items: { value: string; label: string }[];
  label: string;
  isRequired: boolean;
  value?: string | number;
  placeholder: string | number;
  showError: boolean;
  errorMessage: string;
  setValue: (value: string | number) => string | number;
};

const DropDown = ({
  id,
  items,
  label,
  isRequired,
  value,
  placeholder,
  showError,
  errorMessage,
  setValue
}: DropDownType) => {
  return (
    <div className="drop-down">
      <span>
        {label} {isRequired ? '*' : null}
      </span>
      <FormControl variant="standard" fullWidth>
        <InputLabel id={id + '-label'}>{placeholder}</InputLabel>
        <Select
          id={id}
          labelId={id + '-label'}
          value={value ?? ''}
          label={label}
          onChange={(e) => setValue(e.target.value)}
        >
          {items.map((item) => {
            return (
              <MenuItem key={item.label} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
        <p className={showError ? 'error' : 'hidde'}>{errorMessage}</p>
      </FormControl>
    </div>
  );
};

export default withFormsy(DropDown);
