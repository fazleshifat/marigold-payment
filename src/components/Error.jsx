import React from 'react';
import { Link } from 'react-router';
import Navbar from './Layouts/Navbar';

const Error = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='w-full bg-white h-screen flex flex-col items-center justify-center'>
                <img src="/assets/error.png" className='w-3/12' alt="item" />
                <h1 className='text-3xl font-semibold text-gray-700 mb-5'>page not found</h1>
                <Link to='/' className='btn bg-sky-500 text-white rounded-full'>Back to homepage</Link>
            </div></>
    );
};

export default Error;