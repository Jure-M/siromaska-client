// global import
import React, { useState } from 'react';

// components
import AuthHome from '../components/auth/AuthHome';
import RegisterForm from '../components/auth/RegisterForm';
import AccountActivation from '../components/auth/AccountActivation';

const Register: React.FC = () => {
  const [isSigned, setIsSigned] = useState(false);

  return (
    <AuthHome>
      {isSigned ? (
        <AccountActivation
          title="Registraion was successful"
          subtitle="Yay, you are almost new member!!!"
          message="We sent you activation link to your e-mail address. Please confrim
        your e-mail address and activate account so you can use this great
        application."
        />
      ) : (
        <RegisterForm isCompleate={setIsSigned} />
      )}
    </AuthHome>
  );
};

export default Register;
