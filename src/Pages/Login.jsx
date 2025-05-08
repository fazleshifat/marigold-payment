import React, { use, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const { user, setUser, userSignIn, googleSignIn, setLoading } = use(AuthContext);


    const [error, setError] = useState('');
    // setError('');

    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);


    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        userSignIn(email, password)
            .then((result) => {
                toast('✅Login Success');
                navigate(location?.state || "/");

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode);
                setLoading(false);
            });

    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                console.log('google loggedIn success |', user)
                setUser(result.user);
                navigate(location?.state || "/");
                toast('✅Successfully login with Google account');
            })
            .catch((error) => {
                // console.log(error.code)
            })
    }

    return (

        <>
            <div className="min-h-screen py-23 flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-sky-100 px-4">
                <div className="w-full max-w-md shadow-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-center pt-6">
                        Login
                    </h1>
                    <div className="card-body p-6">
                        <form onSubmit={handleLogin} className="grid grid-cols-1 gap-6">
                            {/* Email */}
                            <div>
                                <label className="label text-purple-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input w-full bg-white/70 focus:bg-white border-purple-300"
                                    placeholder="Email"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="label text-purple-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input w-full bg-white/70 focus:bg-white border-purple-300"
                                    placeholder="Password"
                                />
                            </div>

                            {/* Error */}
                            {error && <p className="text-red-600 font-semibold text-center">{error}</p>}

                            {/* Forgot Password */}
                            <div className="text-center">
                                <Link to="/reset-password" className="link link-hover text-purple-800">Forgot password?</Link>
                            </div>

                            {/* Login Button */}
                            <button className="btn bg-purple-600 hover:bg-purple-700 text-white w-full">
                                Login
                            </button>

                            {/* OR Divider */}
                            <div className="flex items-center">
                                <hr className="flex-grow border-purple-300" />
                                <span className="mx-4 text-purple-500 font-semibold">or</span>
                                <hr className="flex-grow border-purple-300" />
                            </div>

                            {/* Google Login */}
                            <button
                                onClick={handleGoogleLogin}
                                className="btn bg-white hover:bg-white/80 border-purple-400 text-purple-700 w-full flex items-center justify-center gap-2"
                            >
                                <FcGoogle />
                                Login with Google
                            </button>

                            {/* Register Redirect */}
                            <p className="text-center">
                                Don’t have an account?{" "}
                                <Link to="/registration" className="text-purple-700 underline">
                                    Create new account
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;