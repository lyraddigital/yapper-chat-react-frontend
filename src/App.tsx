import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import SignUp from './pages/sign-up/SignUp';
import ConfirmationCode from './pages/confirmation-code/ConfirmationCode';
import ProfileDetails from './pages/sign-up/ProfileDetails';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/sign-up/confirmation">
            <ConfirmationCode />
          </Route>
          <Route path="/sign-up/profile">
            <ProfileDetails />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/">
            <SignUp />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
