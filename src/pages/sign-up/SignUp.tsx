import React from 'react';

import Layout from '../../components/shared/Layout';

const SignUp = () => {
  return (
    <Layout pageTitle="Sign Up">
      <button>Sign Up With Google</button>
      <hr />
      <input className="email" type="email" placeholder="Enter your email address" />
      <button>Continue With Email</button>
      <p className="terms">
        By creating an account you agree to our <br />
        Terms of Service and Privacy Policy
      </p>
    </Layout>
  );
}

export default SignUp;
