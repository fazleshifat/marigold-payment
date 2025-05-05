import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <img src="/assets/error.jpg" className='w-3/12' alt="item" />
            <Link to='/' className='btn bg-sky-500 text-white rounded-full'>Back to homepage</Link>
        </div>
    );
};

export default Error;