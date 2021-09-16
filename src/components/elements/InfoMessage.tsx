// style
import './infoMessage.scss';

// global imports
import React from 'react';

interface IInfoMessageProps {
  message: string;
}

const InfoMessage: React.FC<IInfoMessageProps> = ({ message }) => (
  <p className="info-message">{message}</p>
);
export default InfoMessage;
