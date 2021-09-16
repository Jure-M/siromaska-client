import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AxiosResponse } from 'axios';

// redux actions
import { setCurrentUser } from '../../store/action-creators/authActionCreators';

// components
import CustomInput from '../elements/CustomInput';
import Button from '../elements/Button';
import CustomForm from './CustomForm';

// api calls
import { login } from '../../api/auth';

// helpers
import { setTokenToLocalStorage } from '../../helpers/localStorage';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [isLoading, setisLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmitLogin = async () => {
    const errorList = [];
    if (!email) {
      errorList.push('email');
    }
    if (!password) {
      errorList.push('password');
    }
    if (errorList.length === 0) {
      setErrors([]);
      setisLoading(true);
      try {
        const res = (await login(email, password)) as AxiosResponse;
        setEmail('');
        setPassword('');
        setisLoading(false);
        setTokenToLocalStorage(res.data.token);
        dispatch(
          setCurrentUser({ user: res.data.user, token: res.data.token }),
        );
      } catch (err: any) {
        setErrorMessage(err.response.data.message);
        setisLoading(false);
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      }
    } else {
      setErrors(errorList);
    }
  };

  return (
    <CustomForm title="Dearest user, login" errorMessage={errorMessage}>
      <CustomInput
        label="email"
        id="email"
        inputError={errors.includes('email')}
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        label="password"
        id="password"
        inputError={errors.includes('password')}
        value={password}
        setValue={setPassword}
        classes="u-mb-m"
      />
      <Button
        title="Submit"
        handleClick={handleSubmitLogin}
        isLoading={isLoading}
      />
    </CustomForm>
  );
};

export default LoginForm;
