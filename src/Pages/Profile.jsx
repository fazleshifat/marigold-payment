import React from 'react';
import Footer from '../components/Layouts/Footer';
import { use } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';

const Profile = () => {

    const { user } = use(AuthContext);
    console.log(user.photoURL)

    return (
        <>
            <div className='md:pt-14 border-cyan-800 bg-[linear-gradient(135deg,_#A21CAF_0%,_#1E3A8A_100%)] '>
                <div className='w-11/12 py-30 mx-auto'>
                    <div className="card mx-auto border-2 border-cyan-500 bg-[linear-gradient(135deg,_#A21CAF_0%,_#1E3A8A_100%)] md:w-96 rounded-3xl">
                        <figure className="relative px-10 pt-10">

                            {/* {
                                user ? <img className='w-44 border-1 border-gray-300 rounded-full' alt="User Avatar"
                                    src={user.photoURL} />
                                    :
                                    


                            } */}

                            <img className='w-44 border-1 border-gray-300 rounded-full' src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" />
                            <img src="/assets/edit.png" className='absolute w-10 bottom-1 cursor-pointer right-20 md:right-30' alt="edit"/>

                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl text-purple-300">{user.displayName}</h2>
                            <h2 className="card-title text-xl text-gray-500">{user.email}</h2>

                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>


        </>
    );
};

export default Profile;