import './Card.scss';

type CardProps = {
  component: JSX.Element;
  height?: string | number;
  width?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
};
const Card = ({ component, height, width, minWidth, minHeight }: CardProps) => {
  return (
    <div
      className="card"
      style={{
        height: height,
        width: width,
        minHeight: minHeight,
        minWidth: minWidth
      }}
    >
      {component}
    </div>
  );
};

export default Card;
