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
            <div className="h-screen bg-[linear-gradient(135deg,_#A21CAF_0%,_#1E3A8A_100%)]  flex justify-center items-center text-xl font-semibold">
                <span className="loading loading-infinity text-white w-24"></span>
            </div>
        );
    }


    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>


};

export default PrivateRoute;