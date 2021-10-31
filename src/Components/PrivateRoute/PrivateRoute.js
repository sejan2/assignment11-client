import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Context/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <Spinner animation="boorder" variant="danger"></Spinner>
    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user.displayName ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;