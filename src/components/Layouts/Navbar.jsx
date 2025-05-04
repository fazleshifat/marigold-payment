import React from 'react';
import { NavLink } from 'react-router';



const Navbar = () => {

    const links = <>

        <li className='text-lg font-semibold text-red-700'><NavLink>Offers</NavLink></li>
        <li className='text-lg font-semibold text-red-700'><NavLink>Contact</NavLink></li>
        <li className='text-lg font-semibold text-red-700'><NavLink>Home</NavLink></li>
        <div className='bg-gray-200 px-4 py-2 flex items-center rounded-full'>
        <li className='text-lg font-semibold text-red-700'><NavLink>Bills Page</NavLink></li>
        </div>
        <div className='bg-gray-200 px-4 py-2 flex items-center rounded-full'>
        <li className='text-lg font-semibold text-red-700'><NavLink>Bills Page</NavLink></li>
        </div>
       
        

    </>
    return (

        <div className="navbar bg-base-100 shadow-sm px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center justify-center cursor-pointer'>
                    <img src="/assets/logo.png" className='w-10' alt="logo" />
                    <a className="font-bold text-3xl text-red-600">arigold</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center gap-6 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {/* login */}
                <a href="#_" class="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-purple-500 rounded hover:bg-white group">
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Login</span>
                </a>
                {/* register */}
                <a href="#_" class="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-pink-700 rounded hover:bg-white group">
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Register</span>
                </a>

            </div>
        </div>
    );
};

export default Navbar;