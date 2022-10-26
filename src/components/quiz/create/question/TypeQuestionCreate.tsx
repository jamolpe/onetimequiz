import CheckType from '../../question/CheckType';
import SelectorType from '../../question/SelectorType';
import TextType from '../../question/TextType';
import './TypeQuestionCreate.scss';

type TypeQuestionCreateType = {
  typeQuestion: string;
};

const QUESTION_TYPES_COMPONENTS: Record<string, () => JSX.Element> = {
  SELECTOR: () => {
    return <SelectorType />;
  },
  TEXT: () => {
    return <TextType />;
  },
  CHECK: () => {
    return <CheckType />;
  }
};
export const TypeQuestionCreate = ({
  typeQuestion
}: TypeQuestionCreateType) => {
  return (
    <div className="type-create-container">
      {QUESTION_TYPES_COMPONENTS[typeQuestion]()}
    </div>
  );
};
