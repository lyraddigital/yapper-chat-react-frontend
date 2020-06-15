import { createContext } from 'react';

import { AuthClient } from './auth';

export const AuthContext = createContext<AuthClient>(new AuthClient());

export default AuthContext;