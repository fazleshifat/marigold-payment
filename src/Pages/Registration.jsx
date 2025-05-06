import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { useState } from 'react';

const Registration = () => {

    const { createUser, user, setUser, setUserImageURL, googleSignIn, loading, setLoading } = use(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.photo_url.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then((result) => {
                navigate('/');
                // alert('registration complete');
                setUser(result.user);

            }).catch((error) => {
                setError(error.code);
                setLoading(false);
            });

    }

    const handleGoogleRegister = () => {
        googleSignIn()
            .then((result) => {
                console.log('google loggedIn success |', user)
                setUser(result.user);
                navigate(location?.state || "/");
            })
            .catch((error) => {
                console.log(error.code)
            })
    }

    return (
        <>
            <div className="w-full pt-14 flex h-screen items-center justify-center px-4 md:px-0 bg-gradient-to-br from-purple-100 via-pink-50 to-sky-100">
                <div className="card w-full md:w-3/4 lg:w-2/5 mx-auto shadow-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mx-auto pt-6 text-center">
                        Registration
                    </h1>
                    <div className="card-body">
                        <form onSubmit={handleRegistration} className="grid grid-cols-2 md:grid-cols-1 gap-6">
                            {/* Name */}
                            <div>
                                <label className="label text-purple-700">Name</label>
                                <input type="text" name="name" className="input w-full bg-white/70 focus:bg-white border-purple-300" placeholder="Your name" />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="label text-purple-700">Email</label>
                                <input type="email" name="email" className="input w-full bg-white/70 focus:bg-white border-purple-300" placeholder="Email" />
                            </div>

                            {/* Photo URL */}
                            <div>
                                <label className="label text-purple-700">Photo URL</label>
                                <input type="text" name="photo_url" className="input w-full bg-white/70 focus:bg-white border-purple-300" placeholder="photo_URL" />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="label text-purple-700">Password</label>
                                <input type="password" name="password" className="input w-full bg-white/70 focus:bg-white border-purple-300" placeholder="Password" />
                            </div>

                            {/* Error Message spans both columns */}
                            {error && (
                                <p className="text-red-600 font-semibold col-span-2 text-center">{error}</p>
                            )}

                            {/* Forgot Password link */}
                            <div className="col-span-2">
                                <a className="link link-hover text-purple-800">Forgot password?</a>
                            </div>

                            {/* Registration Button */}
                            <div className="col-span-2">
                                <button className="btn bg-purple-600 hover:bg-purple-700 text-white w-full">Register</button>
                            </div>

                            {/* OR Divider */}
                            <div className="col-span-2 flex items-center">
                                <hr className="flex-grow border-purple-500 border-t" />
                                <span className="mx-4 text-purple-500 font-semibold">or</span>
                                <hr className="flex-grow border-purple-500 border-t" />
                            </div>

                            {/* Google Button */}
                            <div className="col-span-2">
                                <button onClick={handleGoogleRegister} className="btn bg-white hover:bg-white/80 border-purple-400 text-purple-700 w-full flex items-center justify-center gap-2">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Register with Google
                                </button>
                            </div>

                            {/* Login Redirect */}
                            <p className="text-center col-span-2">
                                Already have an account?{" "}
                                <Link to="/login" className="text-purple-700 underline">
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Registration;