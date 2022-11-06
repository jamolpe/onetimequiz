import { useState } from 'react';
import Slider from '../../common/Slider';
import './TextType.scss';

type TextTypeProps = {
  prevMaxCharacters?: number;
  viewMode?: boolean;
};

const TextType = ({ prevMaxCharacters, viewMode = false }: TextTypeProps) => {
  const [maxCharacters, setmaxCharacters] = useState<number>(
    prevMaxCharacters ?? 50
  );
  return (
    <div className="type-text-slider">
      <Slider
        disabled={viewMode}
        required
        value={maxCharacters}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        size="small"
        arialabel="non-linear-slider"
        onChangeValue={(val) => setmaxCharacters(val)}
        name="questionTextMax"
        defaultValue={0}
        label="Max length"
        validationError="Max length(numeric)"
      />
    </div>
  );
};

export default TextType;
