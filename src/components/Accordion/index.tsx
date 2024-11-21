import React from 'react';
import classNames from '@utils/classNames';
import AccordionItem from './AccordionItem';

export interface AccordionProps {
  children?: React.ReactNode;
  className?: string | string[];
}

const Accordion: React.FC<AccordionProps> & {
  Item: typeof AccordionItem;
} = ({ children, className }) => {
  const PREFIX = 'accordion';

  return (
    <div className={classNames(PREFIX, Array.isArray(className) ? className.join(' ') : className)}>{children}</div>
  );
};

Accordion.displayName = 'Accordion';

Accordion.Item = AccordionItem;

export default Accordion;
