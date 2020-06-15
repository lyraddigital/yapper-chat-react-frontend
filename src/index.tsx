import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AuthContext from './auth/AuthContext';
import * as serviceWorker from './serviceWorker';
import { AuthClient } from './auth/auth';

const client = new AuthClient();

ReactDOM.render(
  <AuthContext.Provider value={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
