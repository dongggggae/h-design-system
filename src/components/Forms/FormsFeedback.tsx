import React from 'react';

import Icon from '@components/Icon';

import classNames from '@utils/classNames';

export interface FormsFeedbackProps {
  state: 'valid' | 'invalid' | '';
  children: React.ReactNode;
}

const FormsFeedback: React.FC<FormsFeedbackProps> = ({ state = '', children }) => {
  const PREFIX = 'feedback';

  return (
    <div className={classNames(`${state}-${PREFIX}`)}>
      <p className="message text--xs">
        <Icon name="error-fill" size="sm" />
        {children}
      </p>
    </div>
  );
};

export default FormsFeedback;
