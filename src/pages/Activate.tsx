// global imports
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Redirect } from 'react-router';

// api
import { activateAccount } from '../api/auth';

// components
import AuthHome from '../components/auth/AuthHome';
import Button from '../components/elements/Button';
import AccountActivation from '../components/auth/AccountActivation';

const Activate: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [hasApiError, setHasApiError] = useState(false);

  const location = useLocation();
  const token = location.search.slice(1);
  const history = useHistory();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        await activateAccount(token);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setHasApiError(true);
      }
    };
    if (token) {
      fetchApi();
    } else {
      setIsLoading(false);
      setHasError(true);
    }
  }, []);

  const goToLogin = () => {
    history.push('/login');
  };

  const goToRegister = () => {
    history.push('/register');
  };

  if (isLoading) {
    return <div>spinner</div>;
  }

  if (hasError) {
    return <Redirect to="/404" />;
  }

  return (
    <AuthHome>
      {hasApiError ? (
        <AccountActivation
          title="User with this token does not exist"
          subtitle="Sorry, you are not member!!!"
          message=" Please sign up to start using aplication"
        >
          <Button title="go to register" handleClick={goToRegister} />
        </AccountActivation>
      ) : (
        <AccountActivation
          title="Account is activated"
          subtitle="Congrats, you are new member!!!"
          message="Please log in to start using aplication"
        >
          <Button title="go to login" handleClick={goToLogin} />
        </AccountActivation>
      )}
    </AuthHome>
  );
};

export default Activate;
