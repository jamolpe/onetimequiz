import Formsy from 'formsy-react';
import { useState } from 'react';
import { Quiz } from '../../../services/quiz/models';
import AccordionQuestion from './question/AccordionQuestion';
import './CreateQuizResult.scss';

type CreateQuizResultProps = {
  quiz: Quiz;
};

const CreateQuizResult = ({ quiz }: CreateQuizResultProps) => {
  const [expanded, setExpanded] = useState<string | false>('');
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const { questions, title } = quiz;
  return (
    <Formsy>
      <div className="create-result">
        <h1 className="title">{title}</h1>
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
                viewMode={true}
              />
            );
          })}
        </div>
      </div>
    </Formsy>
  );
};

export default CreateQuizResult;
