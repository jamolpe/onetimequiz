import { useState } from 'react';
import TextInput from '../../../common/TextInput';

export type TextQuestionDetail = {
  maxCaracters: string;
};

type TextTypeCreateType = {
  setQuestionType: (value: TextQuestionDetail) => void;
};

const TextTypeCreate = ({ setQuestionType }: TextTypeCreateType) => {
  const [maxCaracters, setMaxCaracters] = useState<string>('');

  return (
    <>
      <TextInput
        name="maxCaracters"
        label={'Max length'}
        value={maxCaracters}
        onChangeValue={(value) => {
          setMaxCaracters(value);
          setQuestionType({ maxCaracters: value });
        }}
      />
    </>
  );
};

export default TextTypeCreate;
