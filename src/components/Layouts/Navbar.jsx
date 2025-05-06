import React, { useEffect, useState, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, setUser, userImageURL, setUserImageURL, userSignOut } = useContext(AuthContext);

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.log(error.code);
            });
    };

    // navLinks are here
    const links = (
        <>
            <li className="relative group text-lg font-semibold transition duration-300 ease-in-out">
                <NavLink
                    to="/"
                    className="relative inline-block text-[#9b86c1] group-hover:text-purple-600 transition duration-300 ease-in-out"
                >
                    Home
                    <span
                        className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 ease-in-out
            group-hover:w-full group-hover:left-0"
                    ></span>
                </NavLink>
            </li>

            <li className="relative group text-lg font-semibold transition duration-300 ease-in-out">
                <NavLink
                    to="/bills-page"
                    className="relative inline-block text-[#9b86c1] group-hover:text-sky-600 transition duration-300 ease-in-out"
                >
                    Bills
                    <span
                        className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 ease-in-out
            group-hover:w-full group-hover:left-0"
                    ></span>
                </NavLink>
            </li>

            <li className="relative group text-lg font-semibold transition duration-300 ease-in-out">
                <NavLink
                    to="/my-profile"
                    className="relative inline-block text-[#9b86c1] group-hover:text-purple-600 transition duration-300 ease-in-out"
                >
                    My Profile
                    <span
                        className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 ease-in-out
            group-hover:w-full group-hover:left-0"
                    ></span>
                </NavLink>
            </li>


        </>
    );

    return (
        <div className={`navbar fixed left-1/2 -translate-x-1/2 top-3 w-11/12 bg-black/10 backdrop-blur-md shadow-sm md:px-8 z-50 rounded-full transition-all duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-100 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className='flex items-center justify-center cursor-pointer'>
                    <img src="/assets/logo.png" className='w-10' alt="logo" />
                    <h1 className="font-bold text-xl md:text-3xl text-sky-400">arigold</h1>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center gap-6 px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-2 flex">
                {user ? (
                    <>

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-auto rounded-full">
                                    {
                                        user ? <img className='w-44 border-1 border-gray-300 rounded-full' alt="User Avatar"
                                            src={user.photoURL} />
                                            :
                                            <img className='w-44 border-1 border-gray-300 rounded-full' src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" />

                                    }


                                </div>
                            </div>
                            <ul tabIndex={0} className="menu dropdown-content bg-base-100 space-y-4 rounded-box z-10 mt-5 w-fit p-2 shadow">
                                <div>
                                    <li>{user.displayName}</li>
                                </div>
                                <li><Link className='text-lg border-b'>Balance: <span className='font-bold'>10000 BDT</span> </Link></li>
                                <li><Link className='btn text-lg' onClick={handleSignOut}>Sign Out</Link></li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to='/login' className="relative inline-flex items-center justify-start px-3 md:px-6 py-2 overflow-hidden font-medium transition-all bg-purple-500 rounded hover:bg-white group">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Login</span>
                        </Link>

                        <Link to='/registration' className="relative inline-flex items-center justify-start px-3 md:px-6 py-2 overflow-hidden font-medium transition-all bg-pink-700 rounded hover:bg-white group">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Register</span>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
