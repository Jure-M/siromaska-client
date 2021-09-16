// style
import './button.scss';

// global imports
import React from 'react';

// assets
import spinner from '../../assets/loading.jpg';

interface IProps {
  title: string;
  handleClick?: () => void;
  classes?: string;
  isLoading?: boolean;
}

const Button = ({
  title,
  handleClick = () => undefined,
  isLoading = false,
  classes = '',
}: IProps) => (
  <button
    disabled={isLoading}
    className={`btn ${classes}`}
    type="button"
    onClick={handleClick}
  >
    {title}
    {isLoading ? <img src={spinner} alt="Loading" /> : null}
  </button>
);
export default Button;
