import React from 'react';
import { Link } from 'react-router';
import Navbar from './Layouts/Navbar';

const Error = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='w-full h-[calc(100vh-50px)] flex flex-col items-center justify-center'>
                <img src="/assets/error.jpg" className='w-3/12' alt="item" />
                <h1 className='text-4xl font-semibold text-gray-400 mb-5'>page not found</h1>
                <Link to='/' className='btn bg-sky-500 text-white rounded-full'>Back to homepage</Link>
            </div></>
    );
};

export default Error;