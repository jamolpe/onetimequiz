import { Route, Routes } from 'react-router-dom';

import './mainContainer.scss';
const MainContainer = () => {
  return (
    <>
      <div className="body-content body-container">
        <Routes>
          <Route path="/" element={<div> main component</div>} />
          <Route path="*" element={<div>nothing to see here</div>} />
        </Routes>
      </div>
    </>
  );
};

export default MainContainer;
