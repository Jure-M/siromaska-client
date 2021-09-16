// styles
import './styles/main.scss';

// globals
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// api
import { isLogedIn } from './api/auth';

// helpers
import { getTokenFromLocalStorage } from './helpers/localStorage';

// actions
import { setCurrentUser } from './store/action-creators/authActionCreators';

// hooks
import useTypedSelector from './hooks/useTypedSelector';

// components
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Activate from './pages/Activate';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';

function App() {
  const dispatch = useDispatch();

  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);

  const { user } = useTypedSelector((state) => state.auth);

  // fist time appp loads check for user
  useEffect(() => {
    const token = getTokenFromLocalStorage();
    if (token) {
      const checkToken = async () => {
        try {
          const res = await isLogedIn(token);
          if (res.data.user && res.data.token) {
            dispatch(
              setCurrentUser({ user: res.data.user, token: res.data.token }),
            );
            setIsAppLoading(false);
          } else {
            setIsAppLoading(false);
          }
        } catch (err) {
          setIsAppLoading(false);
        }
      };
      checkToken();
    } else {
      setIsAppLoading(false);
    }
  }, []);

  return (
    <>
      {isAppLoading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path="/dashboard">
              {user ? <Dashboard /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/login">
              {user ? <Redirect to="/dashboard" /> : <Login />}
            </Route>
            <Route exact path="/register">
              {user ? <Redirect to="/dashboard" /> : <Register />}
            </Route>
            <Route exact path="/activate">
              {user ? <Redirect to="/dashboard" /> : <Activate />}
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
