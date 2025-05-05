import React, { use } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';

const Profile = () => {

    const { user } = use(AuthContext);

    return (
        <div>

        </div>
    );
};

export default Profile;