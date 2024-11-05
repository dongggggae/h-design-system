import React from 'react';

import classNames from '@utils/classNames';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string | string[];
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const PREFIX = 'container';

  return (
    <div className={classNames(PREFIX, Array.isArray(className) ? className.join(' ') : className)}>{children}</div>
  );
};

Container.displayName = 'Container';

export default Container;
