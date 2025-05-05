import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import { Link } from 'react-router';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('clicked login')
    }

    return (

        <>

            <Navbar></Navbar>

            <div className='w-full flex h-[calc(100vh-50px)] items-center justify-center'>
                <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                    <h1 className='text-5xl font-bold mx-auto'>Login</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-sky-500 text-white mt-4">Login</button>
                            <p className='text-center'>Don't have an account? 
                            <Link to='/registration' className='text-primary underline ml-1'>Create new account</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;