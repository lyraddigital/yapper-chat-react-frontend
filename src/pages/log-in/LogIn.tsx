import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Layout from '../../components/shared/Layout';
import LogInForm from '../../components/log-in/LogInForm';
import { useAuth } from '../../auth/useAuth';

const LogIn = () => {
  const [isPageValid, setIsPageValid] = useState(false);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const onFormSubmitted = (email: string) => { setEmail(email) };
  const auth = useAuth();

  useEffect(() => {
    if (email) {
      auth.sendPasswordlessEmail(email).then((result) => {
        setIsPageValid(true);
      });
    }
  }, [email, auth]);

  let loginResult = (
    <Layout pageTitle="Log In">
      <button>Continue With Google</button>
      <hr />
      <LogInForm onFormSubmitted={onFormSubmitted} />
      <p className="terms">
        By creating an account you agree to our <br />
        Terms of Service and Privacy Policy
      </p>
    </Layout>
  );

  if (isPageValid) {
    const to = { pathname: '/log-in/confirmation', state: { email } };
    loginResult = <Redirect to={to} />;
  }

  return loginResult;
}

export default LogIn;