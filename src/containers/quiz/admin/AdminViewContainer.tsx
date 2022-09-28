import { useParams } from 'react-router-dom';

const AdminViewContainer = () => {
  const { uuid } = useParams();

  return <div>AdminViewContainer {uuid}</div>;
};

export default AdminViewContainer;
