import './editPassword.scss';

import React, { useState } from 'react';

// components
import CustomInput from '../elements/CustomInput';
import Button from '../elements/Button';
import ErrorMessage from '../elements/ErrorMessage';

// api
import { fetchPasswordChange } from '../../api/user';

// hooks
import useTypedSelector from '../../hooks/useTypedSelector';

interface IEditPassword {
  isEditing: (value: boolean) => void;
}

const EditPassword: React.FC<IEditPassword> = ({ isEditing }) => {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState('');
  const [inputErrors, setInputErrors] = useState<string[]>([]);

  const { token } = useTypedSelector((state) => state.auth);

  const handleSubmit = async () => {
    const errors = [];
    if (!password) {
      errors.push('password');
    }
    if (!passwordConfirm) {
      errors.push('passwordConfirm');
    }
    if (errors.length === 0) {
      try {
        setInputErrors([]);
        setLoading(true);
        await fetchPasswordChange(password, passwordConfirm, token);
        setLoading(false);
        isEditing(false);
      } catch (err) {
        setApiError(true);
        setApiErrorMessage(err.response.data.message);
        setTimeout(() => {
          setApiErrorMessage('');
          setApiError(false);
        }, 3000);
        setLoading(false);
      }
    } else {
      setInputErrors(errors);
    }
  };

  const handleCancel = () => {
    isEditing(false);
  };

  return (
    <div className="edit-password">
      {apiError ? <ErrorMessage title={apiErrorMessage} /> : null}
      <CustomInput
        id="new-password"
        label="New password"
        value={password}
        setValue={setPassword}
        inputError={inputErrors.includes('password')}
      />
      <CustomInput
        id="new-password-confirm"
        label="Confirm new password"
        value={passwordConfirm}
        setValue={setPasswordConfirm}
        inputError={inputErrors.includes('passwordConfirm')}
      />
      <Button
        title="Update"
        handleClick={handleSubmit}
        isLoading={loading}
        classes="btn--small"
      />
      <Button
        title="Cancel"
        handleClick={handleCancel}
        classes="btn--small u-ml-s"
      />
    </div>
  );
};

export default EditPassword;
