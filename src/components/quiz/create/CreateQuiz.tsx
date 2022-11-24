import { Box, Button, InputLabel, Modal, NativeSelect } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import {
  QuestionType,
  QuizCreate,
  TypeOption
} from '../../../services/quiz/models';
import AccordionQuestionCreate from './question/AccordionQuestion';
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

export type CreateQuizProps = {
  CreateNewQuiz: (quiz: QuizCreate) => void;
};

const CreateQuiz = ({ CreateNewQuiz }: CreateQuizProps) => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [expanded, setExpanded] = useState<string | false>('');
  const [maxNumUsers, setMaxNumUsers] = useState<number>();
  const [title, setTitle] = useState<string>('Quiz title');

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

  const onCreateQuizClick = () => {
    const quiz = {
      questions,
      title: title,
      numUsers: maxNumUsers ?? 1,
      created: new Date().toString(),
      end: (new Date().getDate() + 1).toString()
    };
    CreateNewQuiz(quiz);
  };

  return (
    <Formsy>
      <div className="create-container">
        <div className="title-add">
          <div className="num-users">
            <InputLabel variant="standard">Num users</InputLabel>
            <NativeSelect
              defaultValue={1}
              inputProps={{
                name: 'numUsers'
              }}
              value={maxNumUsers}
              onChange={(e) => setMaxNumUsers(+e.target.value)}
            >
              {[...Array(10).keys()].map((i) => {
                return (
                  <option key={i} value={i}>
                    {i}
                  </option>
                );
              })}
            </NativeSelect>
          </div>
          <h1
            className="title"
            onBlur={(e) => {
              setTitle(e.target.innerHTML);
            }}
            contentEditable
            suppressContentEditableWarning
          >
            {title}
          </h1>
          <div className="add-question">
            <AddIcon onClick={handleOpen} sx={{ fontSize: 40 }} />
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
              <AccordionQuestionCreate
                id={q.id}
                key={i}
                panelName={`panel${i}`}
                handleChange={handleChange}
                question={q}
                expanded={expanded}
                onDeleteClick={onDeleteClick}
                viewMode={false}
              />
            );
          })}
        </div>
      </div>
      <div className="create-button">
        <Button variant="contained" color="success" onClick={onCreateQuizClick}>
          Create Quiz
        </Button>
      </div>
    </Formsy>
  );
};

export default CreateQuiz;
