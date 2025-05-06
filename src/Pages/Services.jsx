import React from 'react';

const Services = () => {
    return (
        <div>

            <h1 className='text-3xl  md:text-5xl font-bold text-center py-16 text-purple-200'>Our Services<span className='text-amber-400 font-extrabold'>|</span> </h1>

            {/* first card */}
            <div className="hero">
                <div className="border-b-2 mb-4 hero-content flex-col lg:flex-row">
                    <img
                        className='w-2xl' src='/assets/slide-1.png'
                    />
                    <div>
                        <h1 className="text-4xl font-bold text-purple-300 underline">🔌Electricity Bill</h1>
                        <p className="py-6 text-gray-300">
                            Stay Flowing, Stay Informed
                            Keep tabs on your household or commercial water consumption and manage bills online with transparency and control. No more hidden fees — just clear, detailed billing at your fingertips.
                            <br />
                            <span className='font-semibold'> 🚿 Receive smart usage alerts to avoid water wastage. </span>
                        </p>
                        <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-300 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">See Details</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* second card */}

            <div className="hero">
                <div className="border-b-2 mb-4 hero-content flex-col lg:flex-row-reverse">
                    <img
                        className='w-96' src='/assets/slide-2.jpg'
                    />
                    <div>
                        <h1 className="text-4xl font-bold text-purple-300 underline">💧Water Bill</h1>
                        <p className="py-6 text-gray-200">
                            Power Your Life with Ease
                            Easily track, manage, and pay your electricity bills without the long queues or paper hassle. Our system ensures accurate meter-based billing, timely reminders, and a smooth payment experience.
                            <br />
                            <span className='font-semibold'> 💡 Auto-generate monthly usage reports for better energy planning. </span>
                        </p>
                        <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-300 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">See Details</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* third card */}

            <div className="hero ">
                <div className="border-b-2 mb-4 hero-content flex-col lg:flex-row">
                    <img
                        className='w-96' src='/assets/slide-3.png'
                    />
                    <div>
                        <h1 className="text-4xl font-bold text-purple-300 underline">🔥Gas Bill</h1>
                        <p className="py-6 text-gray-200">
                            Fuel Your Home, Not the Hassle
                            Securely view and pay your gas bills with one click. Whether you're using piped or cylinder-based gas, our system accommodates both with flexible billing options and real-time updates.
                            <br />
                            <span className='font-semibold'> 🔥 Get notified when your balance runs low or usage spikes. </span>
                        </p>
                        <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-300 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">See Details</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* fourth card */}

            <div className="hero ">
                <div className="border-b-2 mb-4 hero-content flex-col lg:flex-row-reverse">
                    <img
                        className='w-auto' src='/assets/slide-4.png'
                    />
                    <div>
                        <h1 className="text-4xl font-bold text-purple-100 underline">🌐All in One Utility</h1>
                        <p className="py-6 text-gray-700">
                            Unified Billing for Every Need
                            No more juggling multiple platforms! Marigold brings electricity, water, gas, and more into one easy-to-use dashboard — so you can manage all your utilities from a single place.
                            <br />
                            <span className='font-semibold'> 📲 One login. One platform. Total control. </span>
                        </p>
                        <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-300 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">See Details</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;