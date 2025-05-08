import React from 'react';
import { use } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const UpdateProfile = ({ setEditProfile }) => {

    const { user, setUser, setLoading } = use(AuthContext);


    const handleEditProfile = (e) => {
        // e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateProfile(user, {
            displayName: name, photoURL: photo,
        })
            .then(() => {
                toast('✅ User updated');
            }).catch((error) => {
                console.log(error.message);
            });

        // const updatedUser = { ...user, displayName: name, photoURL: photo };
        // setUser(updatedUser);
    }

    const handleCancelEdit = () => {

        setEditProfile(false);
    }


    return (
        <div>
            <div className='mx-auto p-6 my-3 bg-white/30 rounded-2xl shadow-md space-y-2 w-11/12'>

                <form onSubmit={handleEditProfile} className="space-y-4">
                    <h2 className="text-2xl font-bold text-center">Update Profile</h2>

                    <div>
                        <label className="block font-semibold mb-1">Name</label>
                        <input
                            name='name'
                            type="text"
                            // value={name}
                            // onChange={(e) => setName(e.target.value)}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Photo URL</label>
                        <input
                            name='photo'
                            type="text"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <button className="btn btn-success text-white w-full">Save Changes</button>
                </form>
                <button onClick={handleCancelEdit} className="btn btn-primary w-full">Cancel Changes</button>
            </div>
        </div>
    );
};

export default UpdateProfile;