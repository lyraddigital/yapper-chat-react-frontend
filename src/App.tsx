import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import LogIn from './pages/log-in/LogIn';
import ConfirmationCode from './pages/confirmation-code/ConfirmationCode';
import ProfileDetails from './pages/on-boarding/ProfileDetails';
import AnonymousRoute from './auth/AnonymousRoute';
import AuthenticatedRoute from './auth/AuthenticatedRoute';
import Chat from './pages/chat/Chat';

function App() {
  return (
    <Router>
        <Switch>
          <AnonymousRoute path="/on-boarding/profile">
            <ProfileDetails />
          </AnonymousRoute>
          <AnonymousRoute path="/log-in/confirmation">
            <ConfirmationCode />
          </AnonymousRoute>
          <AnonymousRoute path="/log-in">
            <LogIn />
          </AnonymousRoute>
          <AuthenticatedRoute path="/chat">
            <Chat />
          </AuthenticatedRoute>
          <AuthenticatedRoute path="/">
            <Chat />
          </AuthenticatedRoute>
        </Switch>
    </Router>
  );
}

export default App;
