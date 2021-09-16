import './errorMessage.scss';

import React from 'react';

interface IErrorMessageProps {
  title: string;
}

const ErrorMesssage: React.FC<IErrorMessageProps> = ({ title }) => (
  <div role="alert" className="error-message">
    {title}
  </div>
);

export default ErrorMesssage;
