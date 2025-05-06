import React from 'react';
import Footer from '../components/Layouts/Footer';

const Profile = () => {
    return (
        <>
            <div className='w-11/12 my-28 bg-base-300 mx-auto rounded-3xl'>
                <div className="card mx-auto bg-base-300 w-96">
                    <figure className="relative px-10 pt-10">
                        <img
                            src="/assets/profile.png"
                            alt="Shoes"
                            className="rounded-full w-70 border-4 border-gray-300 p-1" />
                        <img src="/assets/edit.png" className='cursor-pointer absolute w-16 right-19 bottom-2' alt="icon" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">Name</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
            
            
            </>
    );
};

export default Profile;