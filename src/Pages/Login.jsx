import React, { use, useState } from 'react';
import Navbar from '../components/Layouts/Navbar';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

    const { user, setUser, userSignIn, googleSignIn, setLoading } = use(AuthContext);

    const [error, setError] = useState('');
    // setError('');

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);


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
            <div className="w-full pt-20 flex h-screen items-center justify-center px-4 md:px-0 bg-gradient-to-br from-purple-100 via-pink-50 to-sky-100">
                <div className="card w-full md:w-3/12 mx-auto shadow-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mx-auto pt-6 text-center">
                        Login
                    </h1>
                    <div className="card-body">
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

                            {/* Error Message */}
                            {error && (
                                <p className="text-red-600 font-semibold text-center">{error}</p>
                            )}

                            {/* Forgot Password (centered) */}
                            <div className="text-center">
                                <a className="link link-hover text-purple-800">Forgot password?</a>
                            </div>

                            {/* Login Button */}
                            <div>
                                <button className="btn bg-purple-600 hover:bg-purple-700 text-white w-full">
                                    Login
                                </button>
                            </div>

                            {/* OR Divider */}
                            <div className="flex items-center my-0">
                                <hr className="flex-grow border-purple-300 border-t" />
                                <span className="mx-4 text-purple-500 font-semibold">or</span>
                                <hr className="flex-grow border-purple-300 border-t" />
                            </div>

                            {/* Google Login */}
                            <div>

                                <button
                                    onClick={handleGoogleLogin}
                                    className="btn bg-white hover:bg-white/80 border-purple-400 text-purple-700 w-full flex items-center justify-center gap-2"
                                ><svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    {/* Google icon SVG */}
                                    Login with Google
                                </button>
                            </div>

                            {/* Registration Redirect */}
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