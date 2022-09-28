import { useParams } from 'react-router-dom';

const FillContainer = () => {
  const { uuid } = useParams();

  return <div>FillContainer {uuid}</div>;
};

export default FillContainer;
