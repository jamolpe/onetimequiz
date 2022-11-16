import { Slider as MaterialSlider } from '@mui/material';
import { withFormsy } from 'formsy-react';
import React from 'react';

type SliderProps = {
  size?: 'small' | 'medium';
  defaultValue: number;
  min: number;
  max: number;
  arialabel: string;
  valueLabelDisplay?: 'on' | 'off' | 'auto';
  label: string;
  isRequired: boolean;
  showError: boolean;
  errorMessage: string;
  value: number;
  step?: number;
  disabled?: boolean;
  onChangeValue: (value: number) => void;
};

const Slider = ({
  size,
  defaultValue,
  min,
  max,
  arialabel,
  valueLabelDisplay,
  label,
  isRequired,
  showError,
  errorMessage,
  value,
  step,
  disabled = false,
  onChangeValue
}: SliderProps) => {
  return (
    <div>
      <span>
        {label} {isRequired ? '*' : null}
      </span>
      <MaterialSlider
        disabled={disabled}
        size={size}
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label={arialabel}
        valueLabelDisplay={valueLabelDisplay}
        value={value}
        step={step}
        onChange={(e, newValue) => {
          if (typeof newValue === 'number') onChangeValue(newValue);
        }}
      />
      <p className={showError ? 'error' : 'hide'}>{errorMessage}</p>
    </div>
  );
};

export default withFormsy(Slider);
