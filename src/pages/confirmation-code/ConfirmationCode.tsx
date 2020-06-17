import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";

import Layout from '../../components/shared/Layout';
import './ConfirmationCode.css';
import { useAuth } from '../../auth/useAuth';

const ConfirmationCode = () => {
  const [code, setCode] = useState<string | undefined>(undefined);
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const auth = useAuth();
  const onSubmit = (data: any) => {
    const actualCode = `${data.firstCode}${data.secondCode}${data.thirdCode}${data.fourthCode}${data.fifthCode}${data.sixthCode}`;
    setCode(actualCode);
  };
  const email = (location?.state as any)?.email ? (location.state as any).email : undefined;

  useEffect(() => {
    if (code) {
      auth.passwordlessLogin(email, code).then((result) => {
        console.log(result);
        // setIsPageValid(true);
      });
    }
  }, [auth, code]);

  
  // if (!email) {
  //   console.log('We should redirect back to sign up as we do not have the email from the previous page');
  // }

  return (
    <Layout pageTitle="Confirmation Code">
      <div className="email confirmationCodeEmail">{email}</div>
      <hr />
      <div className="codes-container">
        <input type="number" name="firstCode" ref={register} />
        <input type="number" name="secondCode" ref={register} />
        <input type="number" name="thirdCode" ref={register} />
        <input type="number" name="fourthCode" ref={register} />
        <input type="number" name="fifthCode" ref={register} />
        <input type="number" name="sixthCode" ref={register} />
      </div>
      <button className="submitCodeButton" onClick={handleSubmit(onSubmit)}>Continue With Code</button>
    </Layout>
  );
}

export default ConfirmationCode;
