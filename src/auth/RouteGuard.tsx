import React, { ReactNode } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import { useAuth } from './useAuth';

export interface RouteGuardProps {
    routeProps: RouteProps;
    redirectTo: string;
    isAuthRoute: boolean;
    children: ReactNode
}

const RouteGuard = (props: RouteGuardProps) => {
    const auth = useAuth();
    let result = (
        <Route {...props.routeProps}>
            {props.children}
        </Route>
    );
    
    if ((auth.isAuthenticated() && !props.isAuthRoute) ||
        (!auth.isAuthenticated() && props.isAuthRoute)) {
            result = <Redirect to={props.redirectTo} />;
    }

    return result;
}

export default RouteGuard;
