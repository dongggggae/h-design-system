import React from 'react';

import classNames from '@utils/classNames';

export interface HeadingProps {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: 'primary' | 'secondary' | 'tertiary' | 'information' | 'positive' | 'caution' | 'negative';
  className?: string | string[];
}

const Heading: React.FC<HeadingProps> = ({ children, level = 'h1', size = 1, color, className }) => {
  const headingTag = level || 'h1';

  return React.createElement(
    headingTag,
    {
      className: classNames(
        size && `h${size}`,
        color && `fc--${color}`,
        Array.isArray(className) ? className.join(' ') : className,
      ),
    },
    children,
  );
};

Heading.displayName = 'Heading';

export default Heading;
