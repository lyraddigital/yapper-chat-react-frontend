import React from 'react';
import { RouteProps } from 'react-router-dom';

import RouteGuard from './RouteGuard';

const AuthenticatedRoute = (props: RouteProps) => {
    return (
        <RouteGuard routeProps={props} isAuthRoute={true} redirectTo='/log-in'>
            {props.children}
        </RouteGuard>
    );
}

export default AuthenticatedRoute;
