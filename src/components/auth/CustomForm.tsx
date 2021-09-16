// style
import './customForm.scss';

// global imports
import React, { ReactNode } from 'react';

interface IFormWrapper {
  title: string;
  errorMessage?: string;
  children: ReactNode;
}

const CustomForm: React.FC<IFormWrapper> = ({
  title,
  errorMessage,
  children,
}) => (
  <div className="custom-form">
    <h3 className="custom-form__title">{title}</h3>
    <p className={`custom-form__error ${errorMessage ? 'is-visible' : ''}`}>
      {errorMessage || 'no error'}
    </p>
    {children}
  </div>
);
export default CustomForm;
