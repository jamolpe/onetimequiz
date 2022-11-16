import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { withFormsy } from 'formsy-react';
import './DropDown.scss';
type DropDownType = {
  id: string;
  items: { value: string | number; label: string }[];
  label: string;
  isRequired: boolean;
  value?: string | number;
  placeholder: string | number;
  showError: boolean;
  errorMessage: string;
  onSelect: (value: string | number) => void;
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
  onSelect
}: DropDownType) => {
  return (
    <div className="drop-down">
      <span>
        {label} {isRequired ? '*' : null}
      </span>
      <FormControl variant="standard" fullWidth>
        <InputLabel id={id + '-label'}>{placeholder}</InputLabel>
        <Select
          className="drop-down-input"
          id={id}
          labelId={id + '-label'}
          value={value ?? ''}
          label={label}
          onChange={(e) => onSelect(e.target.value)}
        >
          {items.map((item) => {
            return (
              <MenuItem key={item.label} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
        <p className={showError ? 'error' : 'hide'}>{errorMessage}</p>
      </FormControl>
    </div>
  );
};

export default withFormsy(DropDown);
