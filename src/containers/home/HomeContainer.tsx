import Card from '../../components/common/Card';
import QuizSelector from '../../components/home/QuizSelector';

import './HomeContainer.scss';
const HomeContainer = () => {
  return (
    <>
      <div className="quiz-selector">
        <Card minHeight={500} minWidth={500} component={<QuizSelector />} />
      </div>
    </>
  );
};

export default HomeContainer;
