import React from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '../../components/shared/Layout';
import './ConfirmationCode.css';
import { useAuth } from '../../auth/useAuth';

const ConfirmationCode = () => {
  const location = useLocation();
  const auth = useAuth();

  console.log(auth);
  const email = (location?.state as any)?.email ? (location.state as any).email : undefined;
  
  if (!email) {
    console.log('We should redirect back to sign up as we do not have the email from the previous page');
  }

  return (
    <Layout pageTitle="Confirmation Code">
      <div className="email confirmationCodeEmail">{email}</div>
      <hr />
      <div className="codes-container">
        <input type="number" value="6" />
        <input type="number" value="6" />
        <input type="number" value="6" />
        <input type="number" value="6" />
        <input type="number" value="6" />
        <input type="number" value="6" />
      </div>
      <button className="submitCodeButton">Continue With Code</button>
    </Layout>
  );
}

export default ConfirmationCode;
