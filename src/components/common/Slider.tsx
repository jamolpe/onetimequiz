import { Slider } from '@mui/material';
import { withFormsy } from 'formsy-react';
import React from 'react';

type SliderCompProps = {
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
  onChangeValue: (value: number) => void;
};

const SliderComp = ({
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
  onChangeValue
}: SliderCompProps) => {
  return (
    <div>
      <span>
        {label} {isRequired ? '*' : null}
      </span>
      <Slider
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
      <p className={showError ? 'error' : 'hidde'}>{errorMessage}</p>
    </div>
  );
};

export default withFormsy(SliderComp);
