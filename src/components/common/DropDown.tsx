import { MenuItem, Select } from '@mui/material';
import { withFormsy } from 'formsy-react';
import React from 'react';

type DropDownType = {
  items: { value: number; label: string }[];
  label: string;
  isRequired: boolean;
  value: string | number;
  placeholder: string | number;
  showError: boolean;
  errorMessage: string;
  setValue: (value: string | number) => string | number;
};

const DropDown = ({
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
      <Select
        value={value}
        label={placeholder}
        onChange={(e) => setValue(e.target.value)}
      >
        {items.map((item) => {
          return <MenuItem value={item.value}>{item.label}</MenuItem>;
        })}
      </Select>
      <p className={showError ? 'error' : 'hidde'}>{errorMessage}</p>
    </div>
  );
};

export default withFormsy(DropDown);
