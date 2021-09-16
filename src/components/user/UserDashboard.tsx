import './userDashboard.scss';

// global imports
import React, { useState } from 'react';

// hooks
import useTypedSelector from '../../hooks/useTypedSelector';
import Button from '../elements/Button';
import EditUser from './EditUser';
import EditPassword from './EditPassword';

const UserDashboard = () => {
  const [editModeUsername, setEditModeUsername] = useState(false);
  const [editModePassword, setEditModePassword] = useState(false);

  const { user } = useTypedSelector((state) => state.auth);

  return (
    <div className="user-dashboard">
      <h3 className="user-dashboard__title">
        You are signed in as {user.username}
      </h3>
      {editModeUsername && <EditUser isEditing={setEditModeUsername} />}
      {editModePassword && <EditPassword isEditing={setEditModePassword} />}
      {editModeUsername || editModePassword ? null : (
        <>
          <Button
            title="Change username"
            classes="btn--small"
            handleClick={() => setEditModeUsername(true)}
          />
          <Button
            title="Change password"
            classes="btn--small u-ml-m"
            handleClick={() => setEditModePassword(true)}
          />
        </>
      )}
    </div>
  );
};
export default UserDashboard;
