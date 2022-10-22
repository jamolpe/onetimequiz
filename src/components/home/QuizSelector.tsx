import { Button } from '@mui/material';
import Formsy from 'formsy-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../common/TextInput';

import './QuizSelector.scss';

type SelectorProps = {
  label: string;
  urlBase: string;
  enable: boolean;
  buttonText: string;
  setUuidEnabled: (enable: boolean) => void;
  navigate: (uuid: string) => void;
};
const Selector = ({
  label,
  setUuidEnabled,
  enable,
  navigate,
  urlBase,
  buttonText
}: SelectorProps) => {
  return (
    <Formsy
      onValid={() => setUuidEnabled(true)}
      onInvalid={() => setUuidEnabled(false)}
      onSubmit={(model) => {
        navigate(`${urlBase}${model.uuid}`);
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
          label={label}
        />
        <Button
          disabled={!enable}
          className="selector-button"
          variant="contained"
          color="secondary"
          type="submit"
        >
          {buttonText}
        </Button>
      </div>
    </Formsy>
  );
};

const QuizSelector = () => {
  const navigate = useNavigate();
  const [uuidEnabled, setUuidEnabled] = useState(false);
  const [uuidAdminEnabled, setUuidAdminEnabled] = useState(false);

  return (
    <div className="quiz-selector-form">
      <Selector
        label="Uuid"
        urlBase={'/quiz/'}
        enable={uuidEnabled}
        buttonText={'Fill Quiz'}
        setUuidEnabled={setUuidEnabled}
        navigate={navigate}
      />
      <Selector
        label="Admin uuid"
        urlBase={'/quiz/admin/'}
        enable={uuidAdminEnabled}
        buttonText={'Admin Quiz'}
        setUuidEnabled={setUuidAdminEnabled}
        navigate={navigate}
      />
      <Button
        onClick={() => {
          navigate('/quiz/create');
        }}
        className="selector-button"
        variant="contained"
        color="secondary"
      >
        Create quiz
      </Button>
    </div>
  );
};

export default QuizSelector;
