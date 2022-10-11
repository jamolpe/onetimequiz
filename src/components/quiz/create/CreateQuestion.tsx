import { Button } from '@mui/material';
import Formsy from 'formsy-react';
import React, { useState } from 'react';
import { QuestionType, questionTypes } from '../../../services/quiz/models';
import DropDown from '../../common/DropDown';
import TextInput from '../../common/TextInput';

type CreateQuestion = {
  handleClose: () => void;
  createQuestion: (model: QuestionType) => void;
};

const CreateQuestion = ({ handleClose, createQuestion }: CreateQuestion) => {
  const [createQuestionEnabled, setCreateQuestionEnabled] = useState(false);
  const createQuestionClick = (model: QuestionType) => {
    createQuestion(model);
    handleClose();
  };
  return (
    <Formsy
      onValid={() => setCreateQuestionEnabled(true)}
      onInvalid={() => setCreateQuestionEnabled(false)}
      onSubmit={createQuestionClick}
    >
      <div className="question-title">
        <TextInput
          required
          validations={{ minLength: 5 }}
          validationErrors={{
            minLength: 'size should be more than 5 caracters'
          }}
          name="title"
          label="Title"
          placeholder="Add your question title"
        />
      </div>
      <DropDown
        required
        id="question-type"
        name="type"
        label="type"
        placeholder="Select your type question"
        items={Object.keys(questionTypes).map((k) => ({
          value: k,
          label: questionTypes[k]
        }))}
      />

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
