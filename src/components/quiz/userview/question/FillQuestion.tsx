import React from 'react';
import CheckFillType from './CheckFillType';
import SelectorFillType from './SelectorFillType';
import TextFillType from './TextFillType';

type FillQuestionProps = {
  typeQuestion: string;
  options: any;
};

const QUESTION_TYPES_COMPONENTS: Record<string, (options: any) => JSX.Element> =
  {
    SELECTOR: () => {
      return <SelectorFillType />;
    },
    TEXT: () => {
      return <TextFillType />;
    },
    CHECK: () => {
      return <CheckFillType />;
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
