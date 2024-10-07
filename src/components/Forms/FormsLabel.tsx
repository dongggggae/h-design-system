import React, { LabelHTMLAttributes, forwardRef } from 'react';

import classNames from '@utils/classNames';

export interface FormsLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  className?: string | undefined;
}

const FormsLabel = forwardRef<HTMLLabelElement, FormsLabelProps>(({ htmlFor, ...props }, ref) => {
  const PREFIX = 'form__label';

  return <label htmlFor={htmlFor} ref={ref} className={classNames(PREFIX)} {...props} />;
});

FormsLabel.displayName = 'FormsLabel';

export default FormsLabel;
