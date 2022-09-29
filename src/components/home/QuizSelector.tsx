import { Button } from '@mui/material';
import Formsy from 'formsy-react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../common/TextInput';

import './QuizSelector.scss';
const QuizSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="quiz-selector">
      <Formsy
        onSubmit={(model) => {
          navigate(`/quiz/${model.uuid}`);
        }}
      >
        <div className="selector">
          <TextInput
            name="uuid"
            validations={{
              matchRegexp:
                /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
            }}
            validationError="This is not a valid code"
            required
            label="Uuid:"
          />
          <Button
            className="selector-button"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Fill Quiz
          </Button>
        </div>
      </Formsy>
      <Formsy
        onSubmit={(model) => {
          navigate(`/quiz/admin/${model.adminUuid}`);
        }}
      >
        <div className="selector">
          <TextInput
            name="adminUuid"
            validations={{
              matchRegexp:
                /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
            }}
            validationError="This is not a valid code"
            required
            label="Administrate Uuid:"
          />
          <Button
            className="selector-button"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Admin Quiz
          </Button>
        </div>
      </Formsy>
    </div>
  );
};

export default QuizSelector;
