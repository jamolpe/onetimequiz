import './Card.scss';

type CardProps = {
  component: JSX.Element;
  height?: string | number;
  width?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  margin?: string | number;
};
const Card = ({
  component,
  height,
  width,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  margin
}: CardProps) => {
  return (
    <div
      className="card"
      style={{
        height: height,
        width: width,
        minHeight: minHeight,
        minWidth: minWidth,
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        margin: margin
      }}
    >
      {component}
    </div>
  );
};

export default Card;
