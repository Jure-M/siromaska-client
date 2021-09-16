// global imports
import React from 'react';

// components
import AuthHome from '../components/auth/AuthHome';
import LoginForm from '../components/auth/LoginForm';

const Login: React.FC = () => (
  <AuthHome>
    <LoginForm />
  </AuthHome>
);

export default Login;
