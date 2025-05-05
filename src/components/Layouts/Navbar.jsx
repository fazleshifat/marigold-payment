import React from 'react';
import { Link, NavLink } from 'react-router';



const Navbar = () => {

    const links = <>

        <li className='text-lg font-semibold text-sky-500 hover:text-sky-800'><NavLink to='/'>Home</NavLink></li>
        <li className='text-lg font-semibold text-sky-500 hover:text-sky-800'><NavLink to='/offers'>Offers</NavLink></li>
        <li className='text-lg font-semibold text-sky-500 hover:text-sky-800'><NavLink to='/contact'>Contact</NavLink></li>
        <li className='text-lg font-semibold text-sky-600 hover:text-sky-900'><NavLink to='/bills-page'>Bills Page</NavLink></li>
        <li className='text-lg font-semibold text-sky-600 hover:text-sky-900'><NavLink to='/my-profile'>My Profile</NavLink></li>




    </>
    return (

        <div className="navbar bg-base-100 shadow-sm md:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
                {/* login */}
                <Link to='/login' className="relative inline-flex items-center justify-start px-3 md:px-6 py-2 overflow-hidden font-medium transition-all bg-purple-500 rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Login</span>
                </Link>
                {/* register */}
                <Link to='/registration' className="relative inline-flex items-center justify-start px-3 md:px-6 py-2 overflow-hidden font-medium transition-all bg-pink-700 rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Register</span>
                </Link>

                {/* avatar */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-auto rounded-full">
                            <img
                                className='w-24'
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile

                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;