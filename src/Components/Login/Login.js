import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Context/useAuth';


const Login = () => {
    const { signInWithGoogle, setUser, setError, setLoading } = useAuth();
    const location = useLocation()
    const history = useHistory();
    const redirect = location.state?.from || "/";
    return (
        <div className="container mt-5 my-5">
            <h3 className="my-2">Login System</h3>
            <button
                onClick={() => {
                    // setLoading(true)
                    signInWithGoogle()
                        .then((result) => {
                            const user = result.user;
                            setUser(user);
                            history.push(redirect)
                        })
                        .finally(() => setLoading(false))
                        .catch((err) => {
                            const errorMessage = err.message;
                            setError(errorMessage);
                        })


                }}
                className="btn btn-primary"
            >
                Login with google
            </button>
        </div>
    );
};

export default Login;