import React from 'react';
import { RouteProps } from 'react-router-dom';

import RouteGuard from './RouteGuard';

const AnonymousRoute = (props: RouteProps) => {
    return (
        <RouteGuard routeProps={props} isAuthRoute={false} redirectTo='/'>
            {props.children}
        </RouteGuard>
    );
}

export default AnonymousRoute;
