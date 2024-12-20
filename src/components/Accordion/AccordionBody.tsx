import React from 'react';

export interface AccordionBodyProps {
  children: React.ReactNode;
}

const AccordionBody: React.FC<AccordionBodyProps> = ({ children }) => {
  return <div className="accordion__body">{children}</div>;
};

export default AccordionBody;
