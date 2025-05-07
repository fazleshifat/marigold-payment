import React from 'react';
import { use } from 'react';
import { useRef } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const ForgetPassword = () => {

    const { userPasswordReset } = use(AuthContext);

    const emailRef = useRef();

    const handleReset = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;

        if (!email) {
            alert('Please enter your email');
            return;
        }

        userPasswordReset(email);
        toast(`Password reset link sent to ${email}`);
    };

    return (
        <div className='h-screen w-11/12 md:w-3/12 flex items-center mx-auto'>
            <form onSubmit={handleReset} className="mx-auto p-6 bg-white/80 rounded-xl shadow-md space-y-4">
                <h2 className="text-2xl font-bold text-center text-purple-800">Reset Password</h2>

                <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    className="input input-bordered w-full bg-white/70 focus:bg-white border-purple-300"
                    placeholder="Enter your email"
                    required
                />

                <button
                    type="submit"
                    className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                    Send Reset Link
                </button>
            </form>
        </div>
    );

};

export default ForgetPassword;