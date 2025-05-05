import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    // console.log(user);

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center text-xl font-semibold">
                Loading...
            </div>
        );
    }


    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>


};

export default PrivateRoute;