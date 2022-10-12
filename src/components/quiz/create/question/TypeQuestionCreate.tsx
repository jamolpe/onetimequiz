import { QuestionType } from '../../../../services/quiz/models';
import CheckTypeCreate from './CheckTypeCreate';
import SelectorTypeCreate from './SelectorTypeCreate';
import TextTypeCreate, { TextQuestionDetail } from './TextTypeCreate';
import './TypeQuestionCreate.scss';

type TypeQuestionCreateType = {
  typeQuestion: string;
  setQuestionType: (value: TextQuestionDetail) => void;
};

const QUESTION_TYPES_COMPONENTS: Record<string, (props: any) => JSX.Element> = {
  SELECTOR: (props) => {
    return <SelectorTypeCreate {...props} />;
  },
  TEXT: (props) => {
    return <TextTypeCreate {...props} />;
  },
  CHECK: (props) => {
    return <CheckTypeCreate {...props} />;
  }
};
export const TypeQuestionCreate = ({
  typeQuestion,
  setQuestionType
}: TypeQuestionCreateType) => {
  return (
    <div className="type-create-container">
      {QUESTION_TYPES_COMPONENTS[typeQuestion](setQuestionType)}
    </div>
  );
};
