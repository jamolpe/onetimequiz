import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../../components/common/Card';
import FillQuiz from '../../../components/quiz/userview/FillQuiz';
import { useAppDispatch } from '../../../store/hooks';
import { loadQuiz } from '../../../store/reducers/quiz/quiz-actions';
import { quizSelector } from '../../../store/reducers/quiz/quiz-reducer';
import './FillContainer.scss';

const FillContainer = () => {
  const { uuid } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (uuid) dispatch(loadQuiz(uuid));
  }, []);

  const { loading, quiz } = useSelector(quizSelector);

  return (
    <div className="quiz-fill">
      {loading && <CircularProgress />}
      {!loading && quiz && (
        <Card
          width={600}
          margin={20}
          minHeight={600}
          component={<FillQuiz quiz={quiz} />}
        />
      )}
    </div>
  );
};

export default FillContainer;
