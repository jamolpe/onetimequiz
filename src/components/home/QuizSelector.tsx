import { Button } from '@mui/material';
import Formsy from 'formsy-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../common/TextInput';

import './QuizSelector.scss';
const QuizSelector = () => {
  const navigate = useNavigate();
  const [uuidEnabled, setUuidEnabled] = useState(false);
  const [uuidAdminEnabled, setUuidAdminEnabled] = useState(false);

  return (
    <div className="quiz-selector-form">
      <Formsy
        onValid={() => setUuidEnabled(true)}
        onInvalid={() => setUuidEnabled(false)}
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
            disabled={!uuidEnabled}
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
        onValid={() => setUuidAdminEnabled(true)}
        onInvalid={() => setUuidAdminEnabled(false)}
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
            disabled={!uuidAdminEnabled}
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
