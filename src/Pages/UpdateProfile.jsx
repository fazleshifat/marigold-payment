import React from 'react';
import { use } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import Footer from '../components/Layouts/Footer';
import { Link } from 'react-router';

const UpdateProfile = ({ setEditProfile }) => {

    const { user, setUser } = use(AuthContext);


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

        const updatedUser = { ...user, displayName: name, photoURL: photo };
        setUser(updatedUser);
    }


    return (
        <>


            <div className='min-h-screen bg-black/60 mx-auto flex items-center justify-center'>
                <div className='w-11/12 max-w-sm md:max-w-md my-28 p-6 bg-white/30 rounded-2xl shadow-md'>

                    {/* Avatar & User Info */}
                    <div className="flex flex-col justify-center items-center text-center mb-2">
                        <img
                            className="w-26 h-26 object-cover border-4 border-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                            src={user?.photoURL || "https://img.daisyui.com/images/profile/demo/superperson@192.webp"}
                            alt="User Avatar"
                        />
                        <h2 className="text-xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-200  to-gray-300 mt-4">
                            {user?.displayName || 'Name not found'}
                        </h2>
                        <p className="text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-r from-gray-200  to-gray-300">
                            {user?.email || 'Email not found'}
                        </p>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        {/* Left Line */}
                        <div className="flex-grow h-px bg-gray-300"></div>

                        {/* Balls */}
                        <div className="flex space-x-1.5">
                            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        </div>

                        {/* Right Line */}
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    {/* Edit Form */}
                    <form onSubmit={handleEditProfile} className="space-y-1">
                        <div className='bg-white/40 rounded-full mt-3'>
                            <h2 className="text-lg md:text-xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r via-purple-800 to-indigo-600 p-2">
                                Update user information
                            </h2>
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-white">Name</label>
                            <input
                                name='name'
                                type="text"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-white">Photo URL</label>
                            <input
                                name='photo'
                                type="text"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <button className="btn btn-success text-white w-full">Save Changes</button>
                    </form>

                    <Link to='/my-profile' className="btn bg-transparent text-warning w-full mt-4">Cancel Changes</Link>
                </div>

            </div>

            <Footer></Footer>


        </>
    );
};

export default UpdateProfile;