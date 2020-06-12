import React from 'react';

import Layout from '../../components/shared/Layout';
import './ConfirmationCode.css';

const ConfirmationCode = () => {
  return (
    <Layout pageTitle="Confirmation Code">
      <input className="email confirmationCodeEmail" type="email" value="techieman82@gmail.com" placeholder="Enter your email address" />
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
