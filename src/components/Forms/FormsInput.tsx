import React, { forwardRef, InputHTMLAttributes } from 'react';

import classNames from '@utils/classNames';

import FormsFeedback from './FormsFeedback';
import FormsLabel from './FormsLabel';

export interface FormsInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  type?: 'text' | 'password' | 'search';
  state?: '' | 'valid' | 'invalid';
  placeholder?: string;
  disalbed?: boolean;
  feedback?: string;
  className?: string | undefined;
}

const FormsInput = forwardRef<HTMLInputElement, FormsInputProps>(
  ({ id, label, type = 'text', state = '', placeholder, disabled, feedback, className, ...props }, ref) => {
    const PREFIX = 'form__control';

    return (
      <div className={classNames('forms-wrap', className)}>
        {label && <FormsLabel htmlFor={id}>{label}</FormsLabel>}
        <div
          className={classNames(
            'input-wrap',
            state === 'valid' ? 'is-valid' : '',
            state === 'invalid' ? 'is-invalid' : '',
          )}
        >
          <input
            id={id}
            ref={ref}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            className={PREFIX}
            {...props}
          />
        </div>
        {feedback && <FormsFeedback state={state}>{feedback}</FormsFeedback>}
      </div>
    );
  },
);

FormsInput.displayName = 'FormsInput';

export default FormsInput;
