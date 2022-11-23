import { useState } from 'react';
import { Quiz } from '../../../services/quiz/models';
import Formsy from 'formsy-react';
import AccordionQuestion from '../create/question/AccordionQuestion';
import './FillQuiz.scss';

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
              <AccordionQuestion
                id={q.id}
                key={i}
                panelName={`panel${i}`}
                handleChange={handleChange}
                question={q}
                expanded={expanded}
                viewMode={false}
              />
            );
          })}
        </div>
      </div>
    </Formsy>
  );
};

export default FillQuiz;
