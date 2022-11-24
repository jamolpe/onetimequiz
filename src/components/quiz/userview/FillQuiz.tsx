import { useState } from 'react';
import { Quiz } from '../../../services/quiz/models';
import Formsy from 'formsy-react';
import './FillQuiz.scss';
import AccordionQuestionFill from './question/AccordionQuestionFill';

type FillQuizProps = {
  quiz: Quiz;
};

const FillQuiz = ({ quiz }: FillQuizProps) => {
  const [expanded, setExpanded] = useState<string | false>('');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Formsy>
      <div className="fill-container">
        <h1 className="title">{quiz.title}</h1>
        <div className="accordion-questions">
          {quiz.questions.map((q, i) => {
            return (
              <AccordionQuestionFill
                id={i.toString()}
                key={i}
                panelName={`panel${i}`}
                handleChange={handleChange}
                question={q}
                expanded={expanded}
              />
            );
          })}
        </div>
      </div>
    </Formsy>
  );
};

export default FillQuiz;
