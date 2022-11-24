import React from 'react';
type TextFillTypeProps = {
  maxCharacters?: number;
};

const TextFillType = ({ maxCharacters }: TextFillTypeProps) => {
  return <div>{maxCharacters ?? 150}</div>;
};

export default TextFillType;
