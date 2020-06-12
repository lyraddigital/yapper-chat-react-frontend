import React from 'react';

import Layout from '../../components/shared/Layout';

const ProfileDetails = () => {
  return (
    <Layout pageTitle="Profile Details">
        <input className="profile" type="text" placeholder="Username" />
        <input className="profile" type="text" placeholder="First Name" />
        <input className="profile" type="text" placeholder="Last Name" />
        <a className="centered-link" href="#">Profile Picture</a>
        <div className="upload-profile-pic"></div>
        <button>Complete Sign Up</button>
    </Layout>
  );
}

export default ProfileDetails;
