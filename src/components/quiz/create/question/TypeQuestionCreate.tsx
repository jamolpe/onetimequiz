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
    return <SelectorTypeCreate {...props} name="detail" />;
  },
  TEXT: (props) => {
    return <TextTypeCreate {...props} name="detail" />;
  },
  CHECK: (props) => {
    return <CheckTypeCreate {...props} name="detail" />;
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
