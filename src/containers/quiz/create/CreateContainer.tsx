import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import Card from '../../../components/common/Card';
import CreateQuiz from '../../../components/quiz/create/CreateQuiz';
import CreateQuizResult from '../../../components/quiz/create/CreateQuizResult';
import ShareSection from '../../../components/quiz/create/ShareSection';
import { QuizCreate } from '../../../services/quiz/models';
import { useAppDispatch } from '../../../store/hooks';
import { createQuiz } from '../../../store/reducers/quiz/quiz-actions';
import { quizSelector } from '../../../store/reducers/quiz/quiz-reducer';
import './CreateContainer.scss';

const CreateContainer = () => {
  const dispatch = useAppDispatch();

  const { creating, created, createdQuiz } = useSelector(quizSelector);
  const CreateNewQuiz = (quiz: QuizCreate) => {
    dispatch(createQuiz(quiz));
  };

  return (
    <div className="quiz-create">
      {creating && <CircularProgress />}
      {!creating && created && createdQuiz ? (
        <>
          <Card
            width={600}
            margin={20}
            component={
              <ShareSection
                sharingUrls={createdQuiz.sharingUrls}
                ownerUrl={createdQuiz.ownerUrl}
              />
            }
          />
          <Card
            width={600}
            component={<CreateQuizResult quiz={createdQuiz.quiz} />}
          />
        </>
      ) : (
        !creating && (
          <Card
            width={600}
            component={<CreateQuiz CreateNewQuiz={CreateNewQuiz} />}
          />
        )
      )}
    </div>
  );
};

export default CreateContainer;
