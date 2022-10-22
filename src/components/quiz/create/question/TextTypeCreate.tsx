import { useState } from 'react';
import Slider from '../../../common/Slider';
import './TextTypeCreate.scss';

const TextTypeCreate = () => {
  const [maxCaracters, setMaxCaracters] = useState<number>(50);
  return (
    <div className="type-text-slider">
      <Slider
        required
        value={maxCaracters}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        size="small"
        arialabel="non-linear-slider"
        onChangeValue={(val) => setMaxCaracters(val)}
        name="questionTextMax"
        defaultValue={0}
        label="Max length"
        validationError="Max length(numeric)"
      />
    </div>
  );
};

export default TextTypeCreate;
