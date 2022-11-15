import './LabelTitle.scss';
type LabelTitleProps = {
  text: string;
};

const LabelTitle = ({ text }: LabelTitleProps) => {
  return <div className="label-title">{text}</div>;
};

export default LabelTitle;
