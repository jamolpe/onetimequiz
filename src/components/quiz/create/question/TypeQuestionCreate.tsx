import CheckTypeCreate from './CheckTypeCreate';
import SelectorTypeCreate from './SelectorTypeCreate';
import TextTypeCreate from './TextTypeCreate';
import './TypeQuestionCreate.scss';

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
  return (
    <div className="type-create-container">
      {QUESTION_TYPES_COMPONENTS[typeQuestion]}
    </div>
  );
};
