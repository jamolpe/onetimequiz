import { TextField } from '@mui/material';
import { withFormsy } from 'formsy-react';
import './TextInput.scss';

type TextInputProps = {
  value?: string;
  errorMessage: string;
  onChangeValue?: (value: string) => string;
  showError: boolean;
  isValid: boolean;
  label: string;
  isRequired: boolean;
  showRequired: boolean;
  placeholder?: string;
};

const TextInput = ({
  errorMessage,
  value,
  onChangeValue,
  showError,
  label,
  placeholder,
  isRequired,
  showRequired
}: TextInputProps) => {
  return (
    <div className={(showRequired ? 'required' : '') + ' text-input '}>
      <span>
        {label} {isRequired ? '*' : null}
      </span>
      <TextField
        className="text-input"
        error={showError}
        label={placeholder ?? label}
        variant="outlined"
        value={value || ''}
        onChange={(e) => onChangeValue && onChangeValue(e.currentTarget.value)}
      />
      <p className={showError ? 'error' : 'hidde'}>{errorMessage}</p>
    </div>
  );
};

export default withFormsy(TextInput);
