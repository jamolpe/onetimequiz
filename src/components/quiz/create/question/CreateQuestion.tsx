import { Button } from '@mui/material';
import Formsy from 'formsy-react';
import { useState } from 'react';
import {
  QuestionType,
  questionTypes,
  QuizQuestion
} from '../../../../services/quiz/models';
import DropDown from '../../../common/DropDown';
import TextInput from '../../../common/TextInput';
import { TypeQuestionCreate } from './TypeQuestionCreate';
import './CreateQuestion.scss';
import { TextQuestionDetail } from './TextTypeCreate';

type CreateQuestion = {
  handleClose: () => void;
  createQuestion: (model: QuestionType) => void;
};

const CreateQuestion = ({ handleClose, createQuestion }: CreateQuestion) => {
  const [createQuestionEnabled, setCreateQuestionEnabled] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const [questionType, setQuestionType] = useState<TextQuestionDetail | null>(
    null
  );

  const createQuestionClick = (model: QuizQuestion) => {
    createQuestion({ ...model, ...questionType });
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
            minLength: 'size should be more than 5 caracters'
          }}
          name="title"
          label="Title"
          placeholder="Add your question title"
        />
      </div>
      <div className="question-type">
        <div className="type-selector">
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
          {selectedType && (
            <TypeQuestionCreate
              typeQuestion={selectedType}
              setQuestionType={setQuestionType}
            />
          )}
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
