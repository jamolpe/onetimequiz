import { Button } from '@mui/material';
import Formsy from 'formsy-react';
import { useState } from 'react';
import { TypeOption, questionTypes } from '../../../../services/quiz/models';
import DropDown from '../../../common/DropDown';
import TextInput from '../../../common/TextInput';
import { TypeQuestionCreate } from './TypeQuestionCreate';
import './CreateQuestion.scss';
import { QuestionCreate } from '../CreateQuiz';

type CreateQuestionProps = {
  handleClose: () => void;
  createQuestion: (model: QuestionCreate | null) => void;
};

type QuestionDataType = {
  questionChecker: { id: string; text: string; selected: boolean }[];
  questionCheckerInput: string;
  questionTextMax: number;
  questionSelector: string;
  questionSelectorInput: string;
  type: string;
  title: string;
};

const CreateQuestion = ({
  handleClose,
  createQuestion
}: CreateQuestionProps) => {
  const [createQuestionEnabled, setCreateQuestionEnabled] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const transformCheckerOptions = (
    questionChecker: {
      id: string;
      text: string;
      selected: boolean;
    }[]
  ): TypeOption[] => {
    return questionChecker.map((check) => ({
      id: check.id,
      text: check.text,
      selected: check.selected
    }));
  };
  const transformSelectorOptions = (
    questionSelectorInput: string,
    questionSelector: string
  ): TypeOption[] => {
    const options: { id: string; text: string }[] = JSON.parse(
      questionSelectorInput
    );
    return options.map((opt, i) => ({
      id: i.toString(),
      text: opt.text,
      selected: questionSelector === opt.id.toString()
    }));
  };
  const createQuestionFromForm = (
    model: QuestionDataType
  ): QuestionCreate | null => {
    console.log(model);
    switch (model.type) {
      case 'SELECTOR':
        return {
          type: model.type,
          title: model.title,
          options: transformSelectorOptions(
            model.questionSelectorInput,
            model.questionSelector
          )
        };
      case 'TEXT':
        return {
          type: model.type,
          title: model.title,
          maxCharacters: model.questionTextMax
        };
      case 'CHECK':
        return {
          type: model.type,
          title: model.title,
          options: transformCheckerOptions(model.questionChecker)
        };
      default:
        return null;
    }
  };
  const createQuestionClick = (model: QuestionDataType) => {
    const question = createQuestionFromForm(model);
    createQuestion(question);
    handleClose();
  };
  return (
    <Formsy
      className="question-create"
      onValid={() => setCreateQuestionEnabled(true)}
      onInvalid={() => setCreateQuestionEnabled(false)}
      onSubmit={createQuestionClick}
    >
      <div className="question-title">
        <TextInput
          required
          value={title}
          onChangeValue={(value) => setTitle(value)}
          validations={{ minLength: 5 }}
          validationErrors={{
            minLength: 'size should be more than 5 characters'
          }}
          name="title"
          label="Title"
          placeholder="Add your question title"
        />
      </div>
      <div className="question-type">
        <div className="type-dropdown">
          <DropDown
            required
            id="question-type"
            name="type"
            label="type"
            placeholder="Select your type question"
            onSelect={(value: string | number) =>
              setSelectedType(value.toString())
            }
            value={selectedType}
            items={Object.keys(questionTypes).map((k) => ({
              value: k,
              label: questionTypes[k]
            }))}
          />
        </div>
        <div className="type-create">
          {selectedType && <TypeQuestionCreate typeQuestion={selectedType} />}
        </div>
      </div>
      {!createQuestionEnabled && (
        <p className="error">Required fields must be filled</p>
      )}
      <Button disabled={!createQuestionEnabled} type="submit">
        Create
      </Button>
    </Formsy>
  );
};

export default CreateQuestion;
