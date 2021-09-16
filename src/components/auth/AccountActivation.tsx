// styles
import './accountActivation.scss';

// global imports
import React, { ReactNode } from 'react';

interface IAccountActivationProps {
  title: string;
  subtitle: string;
  message: string;
  children?: ReactNode;
}

const AccountActivation: React.FC<IAccountActivationProps> = ({
  title,
  subtitle,
  message,
  children,
}) => (
  <div className="activation">
    <h3 className="activation__title">{title}</h3>
    <p className="activation__yay">{subtitle}</p>
    <p className="activation__message">{message}</p>
    {children}
  </div>
);
export default AccountActivation;
