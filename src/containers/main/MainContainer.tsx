import { Route, Routes } from 'react-router-dom';
import QuizContainer from '../quiz/QuizContainer';
import WraperContainer from '../wrapper/WrapperContainer';

import './MainContainer.scss';
const MainContainer = () => {
  return (
    <>
      <div className="body-content body-container">
        <Routes>
          <Route path="/" element={<div> main component</div>} />
          <Route
            path="/quiz/:uuid"
            element={
              <WraperContainer
                component={<QuizContainer isAdminView={false} />}
              />
            }
          />
          <Route
            path="/quiz/admin/:uuid"
            element={
              <WraperContainer
                component={<QuizContainer isAdminView={true} />}
              />
            }
          />
          <Route path="*" element={<div>nothing to see here</div>} />
        </Routes>
      </div>
    </>
  );
};

export default MainContainer;
