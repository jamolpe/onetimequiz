import { Box, Button, Modal } from '@mui/material';
import { useState } from 'react';
import { QuestionType, TypeOption } from '../../../services/quiz/models';
import AccordionQuestion from './question/AccordionQuestion';
import CreateQuestion from './question/CreateQuestion';
import './CreateQuiz.scss';
import Formsy from 'formsy-react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 600,
  border: '1px solid rgba(255, 255, 255, 0.12)',
  bgcolor: 'rgb(55, 51, 51)',
  boxShadow: 24,
  p: 5,
  borderRadius: 5
};

export type QuestionCreate = {
  type: string;
  id?: string;
  title: string;
  options?: TypeOption[];
  maxCharacters?: number | string;
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
  const createNewQuestion = (model: QuestionCreate | null) => {
    if (model) {
      const newQ = { ...model, id: (questions.length + 1).toString() };
      const newQuestions = [...questions, newQ];
      setQuestions(newQuestions);
    }
  };

  const onDeleteClick = (id: string) => {
    if (id) {
      const newQuestions = questions.filter((q) => q.id !== id);
      setQuestions(newQuestions);
    }
  };

  return (
    <Formsy>
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
        <div className="accordion-questions">
          {questions.map((q, i) => {
            return (
              <AccordionQuestion
                id={q.id}
                key={i}
                panelName={`panel${i}`}
                handleChange={handleChange}
                question={q}
                expanded={expanded}
                onDeleteClick={onDeleteClick}
              />
            );
          })}
        </div>
      </div>
    </Formsy>
  );
};

export default CreateQuiz;
