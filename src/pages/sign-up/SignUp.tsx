import React from 'react';

import Layout from '../../components/shared/Layout';

const SignUp = () => {
  return (
    <Layout pageTitle="Sign Up">
      <button>Sign Up With Google</button>
      <hr />
      <input className="signUp" type="email" placeholder="Enter your email address" />
      <button>Continue With Email</button>
    </Layout>
  );
}

export default SignUp;
