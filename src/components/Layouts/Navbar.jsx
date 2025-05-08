import React, { useEffect, useState, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { use } from 'react';

const promiseCategory = fetch("/billCategory.json").then((res) => res.json());


const Navbar = () => {
    const { user, setUser, balance, setBalance, selectedCategory, setSelectedCategory, userSignOut } = useContext(AuthContext);


    const categoryData = use(promiseCategory);
    // console.log(categoryData)


    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();


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
                navigate('/login')
                toast((
                    '✅Signed out successful! Still you can visit the Homepage!🤗'
                ));
                // localStorage.removeItem('userBalance');
                localStorage.removeItem('paidBills');
                setBalance(10000);
            })
            .catch((error) => {
                // console.log(error.code);
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

            {/* NavLink of Category's with dropDown effect are here */}

            <li className="relative group text-lg font-semibold transition duration-300 ease-in-out">
                <div className="dropdown dropdown-hover m-1 cursor-pointer text-[#9b86c1] group-hover:text-sky-600 transition duration-300 ease-in-out">
                    <NavLink
                        to="/bills-page"
                        className="m-1 cursor-pointer text-[#9b86c1] group-hover:text-sky-600 transition duration-300 ease-in-out"
                    >
                        Bills Category 🡇
                    </NavLink>
                    {
                        user && (
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-[999]"
                            >

                                {categoryData.map(category => (
                                    <li key={category.id}><Link to='/bills-page' onClick={() => setSelectedCategory(category.name)}>
                                        {category.name}
                                    </Link></li>
                                ))}


                            </ul>
                        )
                    }
                </div>
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
        <div className={`navbar fixed left-1/2 -translate-x-1/2 top-3 w-11/12 bg-black/10 backdrop-blur-md shadow-sm px-3 md:px-8 z-50 rounded-full transition-all duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-base-100 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-md dropdown-content bg-base-100 rounded-box z-10 mt-3 w-42 p-2 shadow">
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
                            <div tabIndex={0} role="button" className="relative btn btn-ghost btn-circle avatar">
                                <div className="absolute w-7 h-7 rounded-full bg-white/70 animate-ping"></div>
                                <div className="relative w-auto rounded-full">
                                    {
                                        user
                                            ?
                                            <img className='w-44 border-1 border-gray-300 rounded-full' alt="User Avatar"
                                                src={user.photoURL} />
                                            :
                                            <img className='w-44 border-1 border-gray-300 rounded-full' src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" />

                                    }


                                </div>
                            </div>
                            <ul tabIndex={0} className="menu dropdown-content bg-gray-200 space-y-4 rounded-box z-10 mt-5 w-fit p-2 shadow">
                                <div>
                                    {

                                        !user ?
                                            'No name found' :
                                            <li className='text-md font-semibold'>
                                                {user.displayName}</li>
                                    }
                                    <li className='text-lg text-gray-500'>{user.email || 'mara@mari.com'}</li>
                                </div>
                                <div className='flex gap-2 text-md border-b border-gray-500'>
                                    <li>Balance:</li>
                                    <li className='italic text-yellow-500 font-bold'>{balance} BDT</li>
                                </div>
                                <li><Link className='btn text-md' onClick={handleSignOut}>Sign Out</Link></li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <Link
                            to="/login"
                            className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg transition-all duration-300 group"
                        >
                            <span className="absolute inset-0 bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20 rounded-xl"></span>
                            <span className="relative z-10">Login</span>
                        </Link>

                        <Link
                            to="/registration"
                            className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-white rounded-xl bg-gradient-to-r from-pink-500 to-red-400 shadow-lg transition-all duration-300 group"
                        >
                            <span className="absolute inset-0 bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20 rounded-xl"></span>
                            <span className="relative z-10">Register</span>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
