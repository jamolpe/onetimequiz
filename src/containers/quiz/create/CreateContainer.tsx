import Card from '../../../components/common/Card';
import CreateQuiz from '../../../components/quiz/create/CreateQuiz';
import ShareSection from '../../../components/quiz/create/ShareSection';
import { QuizCreate } from '../../../services/quiz/models';
import './CreateContainer.scss';

const CreateContainer = () => {
  const CreateNewQuiz = (quiz: QuizCreate) => {
    console.log(JSON.stringify(quiz));
  };
  return (
    <div className="quiz-create">
      <Card width={600} margin={20} component={<ShareSection />} />
      <Card
        width={600}
        component={<CreateQuiz CreateNewQuiz={CreateNewQuiz} />}
      />
    </div>
  );
};

export default CreateContainer;
