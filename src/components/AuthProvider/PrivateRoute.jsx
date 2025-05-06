import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    // console.log(user);

    const location = useLocation();
    // console.log(location);

    if (loading) {
        return (
            <div className="h-[calc(100vh-50px)] flex justify-center items-center text-xl font-semibold">
                <span className="loading loading-infinity text-purple-500 w-14"></span>
            </div>
        );
    }


    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>


};

export default PrivateRoute;