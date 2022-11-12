import { TypeOption } from '../../../../services/quiz/models';
import CheckType from '../../question/CheckType';
import SelectorType from '../../question/SelectorType';
import TextType from '../../question/TextType';

type TypeQuestionViewType = {
  typeQuestion: string;
  options?: TypeView;
};

type TypeQuestionViewSelector = {
  prevSelectorOptions?: TypeOption[];
  prevSelectedOption: string;
};

type TypeQuestionViewText = {
  prevMaxCharacters?: number;
};

type TypeQuestionViewCheck = {
  prevOptions?: TypeOption[];
};

type TypeView =
  | TypeQuestionViewSelector
  | TypeQuestionViewCheck
  | TypeQuestionViewText;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const QUESTION_TYPES_COMPONENTS: Record<string, (options: any) => JSX.Element> =
  {
    SELECTOR: ({
      prevSelectorOptions,
      prevSelectedOption
    }: TypeQuestionViewSelector) => {
      return (
        <SelectorType
          viewMode
          prevOptions={prevSelectorOptions}
          prevSelectedOption={prevSelectedOption}
        />
      );
    },
    TEXT: ({ prevMaxCharacters }: TypeQuestionViewText) => {
      return <TextType viewMode prevMaxCharacters={prevMaxCharacters} />;
    },
    CHECK: ({ prevOptions }: TypeQuestionViewCheck) => {
      return <CheckType viewMode prevOptions={prevOptions} />;
    }
  };
const ViewQuestion = ({ typeQuestion, options }: TypeQuestionViewType) => {
  return (
    <div className="type-view-container">
      {QUESTION_TYPES_COMPONENTS[typeQuestion](options)}
    </div>
  );
};

export default ViewQuestion;
