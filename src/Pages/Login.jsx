import React, { use } from 'react';
import Navbar from '../components/Layouts/Navbar';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../components/AuthProvider/AuthProvider';

const Login = () => {

    const { userSignIn } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        userSignIn(email, password)
            .then((result) => {
                // Signed in 
                const user = userCredential.user;
                alert('logged in')
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    return (

        <>

            <Navbar></Navbar>

            <div className='w-full flex h-screen md:h-[calc(100vh-50px)] items-center justify-center'>
                <div className="card bg-base-100 md:w-full mx-auto md:max-w-sm shrink-0 shadow-2xl">
                    <h1 className='text-2xl md:text-5xl font-bold mx-auto'>Login</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input defaultValue={`890ioP`} type="password" name='password' className="input" placeholder="Password" />
                            <div><Link className="link link-hover">Forgot password?</Link></div>
                            <button className="btn bg-sky-500 text-white mt-4">Login</button>
                            {/* Google */}
                            <button className="btn bg-white hover:bg-base-300 text-black border-[#e655e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
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