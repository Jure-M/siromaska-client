import './editUser.scss';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// components
import CustomInput from '../elements/CustomInput';
import Button from '../elements/Button';
import ErrorMessage from '../elements/ErrorMessage';

// api
import { fetchNameChange } from '../../api/user';

// hooks
import useTypedSelector from '../../hooks/useTypedSelector';

// actions
import { setCurrentUser } from '../../store/action-creators/authActionCreators';

interface IEditUserProps {
  isEditing: (value: boolean) => void;
}

const EditUser: React.FC<IEditUserProps> = ({ isEditing }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState('false');
  const [inputError, setInputError] = useState(false);

  const { token, user } = useTypedSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!username) {
      setInputError(true);
      return;
    }
    try {
      setInputError(false);
      setLoading(true);
      await fetchNameChange(username, token);
      dispatch(
        setCurrentUser({ user: { username, email: user.email }, token }),
      );
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
  };

  const handleCancel = () => {
    isEditing(false);
  };

  return (
    <div className="edit-user">
      {apiError ? <ErrorMessage title={apiErrorMessage} /> : null}
      <CustomInput
        id="new-username"
        label="New username"
        value={username}
        setValue={setUsername}
        inputError={inputError}
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

export default EditUser;
