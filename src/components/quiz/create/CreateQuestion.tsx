import { Button } from '@mui/material';
import Formsy from 'formsy-react';
import React from 'react';
import { QuestionType, questionTypes } from '../../../services/quiz/models';
import DropDown from '../../common/DropDown';
import TextInput from '../../common/TextInput';

type CreateQuestion = {
  handleClose: () => void;
  createQuestion: (model: QuestionType) => void;
};

const CreateQuestion = ({ handleClose, createQuestion }: CreateQuestion) => {
  const createQuestionClick = (model: QuestionType) => {
    createQuestion(model);
    handleClose();
  };
  return (
    <Formsy onSubmit={createQuestionClick}>
      <div className="question-title">
        <TextInput
          required
          name="title"
          label="Title"
          placeholder="Add your question title"
        />
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
      </div>
      <Button type="submit">Create</Button>
    </Formsy>
  );
};

export default CreateQuestion;
