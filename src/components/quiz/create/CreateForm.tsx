import { Button } from '@mui/material';
import './CreateForm.scss';
const CreateForm = () => {
  return (
    <div className="create-form">
      <div className="title-add">
        <h1 className="title">Quiz</h1>
        <div className="add-question">
          <Button>Add question</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
