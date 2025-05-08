import React from 'react';
import Footer from '../components/Layouts/Footer';
import { use } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { Link } from 'react-router';


const Profile = () => {

    const { user } = use(AuthContext);
    // console.log(user)

    // const handleEditProfile = () => {

    // }


    return (
        <>
            <div className=" pt-30 pb-10 md:pt-40 md:pb-30 bg-gradient-to-br from-purple-800 via-pink-600 to-indigo-700 min-h-screen flex items-center justify-center px-4">
                {/* User Card / Dashboard */}
                <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">


                    <h1 className=" text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-00 to-purple-50 mx-auto pt-6 text-center">
                        Profile
                    </h1>

                    {/* Avatar Section */}
                    <div className="relative flex flex-col items-center pt-8">
                        {/* Blinking shadow under image */}
                        <div className="absolute top-16 w-28 h-28 rounded-full bg-white/70 animate-ping"></div>
                        {/* Avatar */}
                        <img
                            className="relative w-44 h-44 object-cover border-4 border-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                            src={user.photoURL || "https://img.daisyui.com/images/profile/demo/superperson@192.webp"}
                            alt="User Avatar"
                        />
                        {/* Edit Button back to bottom-right of avatar */}

                        <Link
                            to='/update-profile'
                            className="cursor-pointer absolute right-22 md:right-38 bottom-11 bg-white p-2 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300"
                            aria-label="Edit profile"
                        >
                            <img src="/assets/edit.png" className="w-8 h-8" alt="edit" />
                        </Link>

                        {/* Member Badge fixed */}
                        <div className="mt-4 inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full z-10">
                            <img src="/assets/membership.png" className="w-8 h-8 mr-2 rounded-full" alt="Member Logo" />
                            <span className="text-white font-semibold text-sm">Member</span>
                        </div>


                    </div>


                    {/* User Info with demo name */}
                    <div className="p-6 text-center space-y-2">
                        {/* Demo Name */}
                        <h2 className="text-3xl font-extrabold text-white">{user ? user.displayName : 'name not found'}</h2>
                        {/* Email */}
                        <p className="text-white/80">{user ? user.email : 'email not found'}</p>
                    </div>

                    {/* functional component for Edit Profile */}



                    {/* Stats */}
                    <div className="flex flex-wrap px-3 pb-8 gap-3 text-center">
                        {/* Paid Bills */}
                        <div className="flex items-center justify-center px-2 gap-2 bg-gradient-to-tr from-green-400 to-green-600 rounded-xl shadow-md">
                            <svg className="w-6 h-6 mx-auto text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
                            <p className="text-2xl font-bold text-white">12</p>
                            <span className="text-white/80 text-sm">Bills Paid</span>
                        </div>
                        {/* Pending Bills */}
                        <div className="flex items-center px-2 gap-2 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-xl shadow-md">
                            <svg className="w-6 h-6 mx-auto text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 4a1 1 0 00-.993.883L9 7v4.586l3.293 3.293a1 1 0 001.497-1.320l-.083-.094L11 11.586V7a1 1 0 00-1-1z" /></svg>
                            <p className="text-2xl font-bold text-white">3</p>
                            <span className="text-white/80 text-sm">Pending</span>
                        </div>
                        {/* Favorites */}
                        <div className="flex items-center px-2 gap-2 bg-gradient-to-tr from-pink-500 to-pink-700 rounded-xl shadow-md">
                            <svg className="w-6 h-6 mx-auto text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927C9.34 2.080 10.660 2.080 10.951 2.927l.360 1.244a1 1 0 00.950.690h1.308c.969 0 1.371 1.240.588 1.810l-1.058.770a1 1 0 00-.364 1.118l.360 1.244c.290.847-.755 1.554-1.540 1.118l-1.058-.770a1 1 0 00-1.176 0l-1.058.770c-.784.436-1.830-.270-1.540-1.118l.360-1.244a1 1 0 00-.364-1.118l-1.058-.770c-.783-.570-.380-1.810.588-1.810h1.308a1 1 0 00.950-.690l.360-1.244z" /></svg>
                            <p className="text-2xl font-bold text-white">5</p>
                            <span className="text-white/80 text-sm">Favorites</span>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
};

export default Profile;