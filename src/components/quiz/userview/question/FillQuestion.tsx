import React from 'react';
import { TypeOption } from '../../../../services/quiz/models';
import CheckFillType from './CheckFillType';
import SelectorFillType from './SelectorFillType';
import TextFillType from './TextFillType';

type FillQuestionProps = {
  typeQuestion: string;
  options?: FillQType;
};

type SelectorFillTypeProps = {
  options?: TypeOption[];
};

type TextFillTypeProps = {
  maxCharacters?: number;
};

type CheckFillTypeProps = {
  options?: TypeOption[];
};

type FillQType = SelectorFillTypeProps | TextFillTypeProps | CheckFillTypeProps;

const QUESTION_TYPES_COMPONENTS: Record<string, (options: any) => JSX.Element> =
  {
    SELECTOR: ({ options }: SelectorFillTypeProps) => {
      return <SelectorFillType options={options} />;
    },
    TEXT: ({ maxCharacters }: TextFillTypeProps) => {
      return <TextFillType maxCharacters={maxCharacters} />;
    },
    CHECK: ({ options }: CheckFillTypeProps) => {
      return <CheckFillType options={options} />;
    }
  };

const FillQuestion = ({ typeQuestion, options }: FillQuestionProps) => {
  return (
    <div className="type-view-container">
      {QUESTION_TYPES_COMPONENTS[typeQuestion](options)}
    </div>
  );
};

export default FillQuestion;
