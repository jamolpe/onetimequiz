import Card from '../../../components/common/Card';
import CreateForm from '../../../components/quiz/create/CreateForm';
import ShareSection from '../../../components/quiz/create/ShareSection';
import './CreateContainer.scss';

const CreateContainer = () => {
  return (
    <div className="quiz-create">
      <Card width={600} margin={20} component={<ShareSection />} />
      <Card width={600} component={<CreateForm />} />
    </div>
  );
};

export default CreateContainer;
