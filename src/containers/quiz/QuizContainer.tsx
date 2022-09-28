import AdminViewContainer from './admin/AdminViewContainer';
import FillContainer from './fill/FillContainer';

type QuizContainerProps = {
  isAdminView: boolean;
};

const QuizContainer = ({ isAdminView }: QuizContainerProps) => {
  return <>{isAdminView ? <AdminViewContainer /> : <FillContainer />}</>;
};

export default QuizContainer;
