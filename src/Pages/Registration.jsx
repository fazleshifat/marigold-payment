import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { app } from '../Firebase/firebase.config';
import { FcGoogle } from "react-icons/fc";

const auth = getAuth(app)

const Registration = () => {

    const { createUser, user, setUser, googleSignIn, setLoading } = use(AuthContext);
    const [error, setError] = useState('');
    const [passError, setPassError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        // setDefaultUserName(name);
        // setUserImageURL(photo);

        // console.log(1, defaultUserName, 2, userImageURL)


        createUser(email, password)
            .then((result) => {

                // alert('registration complete');
                toast('✅Registration success!')
                setUser(result.user);

                const profile = {
                    displayName: name,
                    photoURL: photo
                }
                updateProfile(result.user, profile)
                    .then(() => {
                        // toast('✅ User updated');
                        navigate('/');
                    })
                    .catch(error => {
                        console.log(error)
                    })


            }).catch((error) => {
                setError(error.code);
                setLoading(false);
                return;
            });

        if (password.length === 0 || email.length === 0) {
            setPassError("field shouldn't be empty.");
            return;
        }
        if (password.length < 6) {
            setPassError("Password must be at least 6 characters long.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPassError("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPassError("Password must contain at least one lowercase letter.");
            return;
        }



    }

    const handleGoogleRegister = () => {
        googleSignIn()
            .then((result) => {
                // console.log('google loggedIn success |', user)
                setUser(result.user);
                navigate(location?.state || "/");
                toast('✅Successfully registered with Google Account!');
            })
            .catch((error) => {
                // console.log(error.code)
            })
    }

    return (
        <>
            <div className="w-full pt-14 py-24 md:py-32 flex h-auto min-h-screen items-center justify-center px-4 md:px-0 bg-gradient-to-br from-purple-100 via-pink-50 to-sky-100">
                <div className="card w-full my-10 md:my-0 md:w-3/4 lg:max-w-xl mx-auto shadow-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
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
                                <input type="text" name="photo" className="input w-full bg-white/70 focus:bg-white border-purple-300" placeholder="photo_URL" />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="label text-purple-700">Password</label>
                                <input type="password" name="password" className="input w-full bg-white/70 focus:bg-white border-purple-300" placeholder="Password" />
                                <p className='text-red-500'>{passError}</p>
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
                                    <FcGoogle />
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