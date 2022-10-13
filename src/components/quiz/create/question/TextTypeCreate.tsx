import { useState } from 'react';
import Slider from '../../../common/Slider';
import './TextTypeCreate.scss';
export type TextQuestionDetail = {
  maxCaracters: string;
};

type TextTypeCreateType = {
  name: string;
};

const TextTypeCreate = ({ name }: TextTypeCreateType) => {
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
        name={name}
        defaultValue={0}
        label="Max length"
        validationError="Max length(numeric)"
      />
    </div>
  );
};

export default TextTypeCreate;
