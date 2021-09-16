// styles
import './customInput.scss';

import React from 'react';

interface ICustomInputProps {
  id: string;
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  inputError?: boolean;
  classes?: string;
}

const CustomInput: React.FC<ICustomInputProps> = ({
  id,
  label,
  classes = '',
  value,
  setValue,
  inputError,
}): JSX.Element => (
  <div className={`input-group ${classes}`}>
    <label className="input-group__label" htmlFor={id}>
      {label}:
    </label>
    <input
      className={`input-group__input ${inputError ? 'has-error' : ''}`}
      id={id}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    {inputError ? (
      <span className="input-group__error">This field is required</span>
    ) : null}
  </div>
);
export default CustomInput;
