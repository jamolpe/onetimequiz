import { Box, Button, Modal } from '@mui/material';
import { useState } from 'react';
import { QuestionType } from '../../../services/quiz/models';
import AccordionQuestion from './question/AccordionQuestion';
import CreateQuestion from './question/CreateQuestion';
import './CreateQuiz.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 600,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 5,
  borderRadius: 5
};

const CreateQuiz = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [expanded, setExpanded] = useState<string | false>('');
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const createNewQuestion = (model: QuestionType | null) => {
    if (model) {
      const newQuestions = [...questions, model];
      setQuestions(newQuestions);
    }
  };
  return (
    <div className="create-container">
      <div className="title-add">
        <h1 className="title">Quiz</h1>
        <div className="add-question">
          <Button onClick={handleOpen}>Add question</Button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateQuestion
            handleClose={handleClose}
            createQuestion={createNewQuestion}
          />
        </Box>
      </Modal>
      <div className="acordion-questions">
        {questions.map((q, i) => {
          return (
            <AccordionQuestion
              key={i}
              panelName={`panel${i}`}
              handleChange={handleChange}
              question={q}
              component={<div>{q.type}</div>}
              expanded={expanded}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CreateQuiz;
