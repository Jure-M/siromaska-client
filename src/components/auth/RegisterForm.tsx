// global imports
import React, { useState } from 'react';

// components
import CustomInput from '../elements/CustomInput';
import Button from '../elements/Button';
import CustomForm from './CustomForm';

// api calls
import { signup } from '../../api/auth';

interface IRegisterFormProps {
  isCompleate: (value: boolean) => void;
}

const RegisterForm: React.FC<IRegisterFormProps> = ({ isCompleate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    try {
      setIsLoading(true);
      const res = await signup(username, email, password, confirmPassword);
      if (res.status === 201) {
        setIsLoading(false);
        isCompleate(true);
      }
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(err.response.data.message);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <CustomForm title="Kind visitor, please signup" errorMessage={errorMessage}>
      <CustomInput
        label="email"
        id="email"
        inputError={false}
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        label="username"
        id="username"
        inputError={false}
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        label="password"
        id="password"
        inputError={false}
        value={password}
        setValue={setPassword}
      />
      <CustomInput
        label="confirm password"
        id="confirmPassword"
        inputError={false}
        classes="u-mb-m"
        value={confirmPassword}
        setValue={setConfirmPassword}
      />
      <Button
        title="Submit"
        handleClick={handleRegister}
        isLoading={isLoading}
      />
    </CustomForm>
  );
};

export default RegisterForm;
