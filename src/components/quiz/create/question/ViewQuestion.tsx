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
  viewMode: boolean;
};

type TypeQuestionViewText = {
  prevMaxCharacters?: number;
  viewMode: boolean;
};

type TypeQuestionViewCheck = {
  prevOptions?: TypeOption[];
  viewMode: boolean;
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
      prevSelectedOption,
      viewMode
    }: TypeQuestionViewSelector) => {
      return (
        <SelectorType
          viewMode={viewMode}
          prevOptions={prevSelectorOptions}
          prevSelectedOption={prevSelectedOption}
        />
      );
    },
    TEXT: ({ prevMaxCharacters, viewMode }: TypeQuestionViewText) => {
      return (
        <TextType viewMode={viewMode} prevMaxCharacters={prevMaxCharacters} />
      );
    },
    CHECK: ({ prevOptions, viewMode }: TypeQuestionViewCheck) => {
      return <CheckType viewMode={viewMode} prevOptions={prevOptions} />;
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
