import { Button } from '@mui/material';
import { useState } from 'react';
import AccordionQuestion from './AccordionQuestion';
import './CreateForm.scss';
const CreateForm = () => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string | false>('');
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const addQuestion = () => {
    const newQuestion = `question${questions.length + 1}`;
    const newQuestions = [...questions, newQuestion];
    setQuestions(newQuestions);
  };
  return (
    <div className="create-form">
      <div className="title-add">
        <h1 className="title">Quiz</h1>
        <div className="add-question">
          <Button onClick={() => addQuestion()}>Add question</Button>
        </div>
      </div>
      <div className="acordion-questions">
        {questions.map((q, i) => {
          return (
            <AccordionQuestion
              panelName={`panel${i}`}
              handleChange={handleChange}
              expanded={expanded}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CreateForm;
