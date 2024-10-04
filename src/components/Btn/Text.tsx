import React from 'react';

export interface BtnTextProps {
  text?: string;
}

const BtnText: React.FC<BtnTextProps> = ({ text }) => {
  const PREFIX = 'btn__text';

  return <span className={PREFIX}>{text}</span>;
};

export default BtnText;
