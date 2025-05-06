import React from 'react';
import Footer from '../components/Layouts/Footer';
import { use } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';

const Profile = () => {

    const { user } = use(AuthContext);
    console.log(user.photoURL)

    return (
        <>
            <div className='w-11/12 my-28 bg-base-300 mx-auto rounded-3xl'>
                <div className="card mx-auto bg-base-300 md:w-96">
                    <figure className="relative px-10 pt-10">
                        <img
                            src={user.photoURL}
                            alt="Shoes"
                            className="rounded-full w-46 md:w-70 border-4 border-gray-300 p-1" />
                        <img src="/assets/edit.png" className='cursor-pointer absolute w-10 md:w-12 right-22 bottom-2' alt="icon" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">{user.displayName}</h2>
                        <h2 className="card-title text-xl text-gray-500">{user.email}</h2>

                    </div>
                </div>
            </div>

            <Footer></Footer>


        </>
    );
};

export default Profile;