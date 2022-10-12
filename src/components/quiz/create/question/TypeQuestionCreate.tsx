import React from 'react';
import CheckTypeCreate from './CheckTypeCreate';
import SelectorTypeCreate from './SelectorTypeCreate';
import TextTypeCreate from './TextTypeCreate';

type TypeQuestionCreateType = {
  typeQuestion: string;
};

const QUESTION_TYPES_COMPONENTS: Record<string, JSX.Element> = {
  SELECTOR: <SelectorTypeCreate />,
  TEXT: <TextTypeCreate />,
  CHECK: <CheckTypeCreate />
};
export const TypeQuestionCreate = ({
  typeQuestion
}: TypeQuestionCreateType) => {
  return <>{QUESTION_TYPES_COMPONENTS[typeQuestion]}</>;
};
