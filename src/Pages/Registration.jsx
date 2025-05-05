import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import { Link } from 'react-router';

const Registration = () => {


    const handleRegistration = (e) => {
        e.preventDefault();
        console.log('clicked registration')
    }

    return (
        <>
            <Navbar></Navbar>

            <div className='w-full flex h-[calc(100vh-50px)] items-center justify-center'>
                <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                    <h1 className='text-5xl font-bold mx-auto'>Registration</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegistration} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Your name" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="photo_URL" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-primary text-white mt-4">Registration</button>
                            <p className='text-center'>Already have an account? 
                                 <Link to='/login' className='text-primary underline ml-1'>Login here</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;