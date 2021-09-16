// style
import './appBar.scss';

// global imports
import React from 'react';
import { useDispatch } from 'react-redux';
import { IoLogOutOutline, IoAppsSharp } from 'react-icons/io5';

// actions
import { logout } from '../store/action-creators/authActionCreators';

// hooks
import useTypedSelector from '../hooks/useTypedSelector';

const AppBar = () => {
  const dispatch = useDispatch();

  const { user } = useTypedSelector((state) => state.auth);

  // const logout = bindActionCreators(logoutAction, dispatch);

  // TODO
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.type === 'click') {
      dispatch(logout());
    }
  };

  const handlePress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.code === ' 13') {
      dispatch(logout());
    }
  };

  return (
    <header className="app-bar">
      <div className="app-bar__logo">
        <IoAppsSharp />
      </div>

      <div className="app-bar__dropdown">
        <p>{user?.username}</p>
      </div>

      <div
        className="app-bar__icon"
        role="button"
        tabIndex={0}
        onClick={(e) => handleClick(e)}
        onKeyDown={(e) => handlePress(e)}
      >
        <IoLogOutOutline />
      </div>
    </header>
  );
};

export default AppBar;
