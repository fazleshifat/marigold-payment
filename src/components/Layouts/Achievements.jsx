import React from 'react';

const Achievements = () => {
    return (
        <>
            <h1 className='text-5xl text-purple-300 text-center font-bold py-10'>Our Achievements<span className='text-amber-400 font-extrabold'>|</span></h1>
            <div className='grid md:grid-cols-3 grid-cols-1 max-w-11/12 gap-10 mx-auto py-24'>


                {/* card 1 */}
                <div className="hero h-80 bg-white/20 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:transform relative">
                    <div className="grid grid-cols-2 h-full">

                        {/* Image Side */}
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center clip-diagonal"
                                style={{
                                    backgroundImage: "url(/assets/bills.jpg)",
                                }}
                            ></div>
                        </div>

                        {/* Text Side */}
                        <div className="flex flex-col  justify-center items-start pl-8 pr-4 text-left space-y-4">
                            <h1 className="text-lg md:text-3xl font-bold text-white">🏆 10,000+ Bills Processed Securely</h1>
                            <button className="btn btn-primary">See Story</button>
                        </div>


                    </div>
                </div>




                {/* card 2 */}
                <div className="hero h-80 bg-white/20 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:transform relative">
                    <div className="grid grid-cols-2 h-full">

                        {/* Image Side */}
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center clip-diagonal"
                                style={{
                                    backgroundImage: "url(/assets/services.jpg)",
                                }}
                            ></div>
                        </div>

                        {/* Text Side */}
                        <div className="flex flex-col  justify-center items-start pl-8 pr-4 text-left space-y-4">
                            <h1 className="text-lg md:text-3xl font-bold text-white">🌍Serving Across 25+ Areas</h1>
                            <button className="btn btn-primary">See Story</button>
                        </div>


                    </div>
                </div>




                {/* card 3 */}
                <div className="hero h-80 bg-white/20 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:transform relative">
                    <div className="grid grid-cols-2 h-full">

                        {/* Image Side */}
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center clip-diagonal"
                                style={{
                                    backgroundImage: "url(/assets/reduction.jpg)",
                                }}
                            ></div>
                        </div>

                        {/* Text Side */}
                        <div className="flex flex-col  justify-center items-start pl-8 pr-4 text-left space-y-4">
                            <h1 className="text-lg md:text-3xl font-bold text-white">📈40% Reduction in Late Payments</h1>
                            <button className="btn btn-primary">See Story</button>
                        </div>


                    </div>
                </div>




                {/* card 4 */}
                <div className="hero h-80 bg-white/20 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:transform relative">
                    <div className="grid grid-cols-2 h-full">

                        {/* Image Side */}
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center clip-diagonal"
                                style={{
                                    backgroundImage: "url(/assets/trust.jpg)",
                                }}
                            ></div>
                        </div>

                        {/* Text Side */}
                        <div className="flex flex-col  justify-center items-start pl-8 pr-4 text-left space-y-4">
                            <h1 className="text-lg md:text-3xl font-bold text-white">🧑‍💼Trusted by 50+ Admins</h1>
                            <button className="btn btn-primary">See Story</button>
                        </div>


                    </div>
                </div>




                {/* card 5 */}
                <div className="hero h-80 bg-white/20 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:transform relative">
                    <div className="grid grid-cols-2 h-full">

                        {/* Image Side */}
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center clip-diagonal"
                                style={{
                                    backgroundImage: "url(/assets/stars.png)",
                                }}
                            ></div>
                        </div>

                        {/* Text Side */}
                        <div className="flex flex-col  justify-center items-start pl-8 pr-4 text-left space-y-4">
                            <h1 className="text-lg md:text-3xl font-bold text-white">🚀Growing with 5-Star Feedback</h1>
                            <button className="btn btn-primary">See Story</button>
                        </div>


                    </div>
                </div>




                {/* card 6 */}
                <div className="hero h-80 bg-white/20 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:transform relative">
                    <div className="grid grid-cols-2 h-full">

                        {/* Image Side */}
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center clip-diagonal"
                                style={{
                                    backgroundImage: "url(/assets/uptime.jpg)",
                                }}
                            ></div>
                        </div>

                        {/* Text Side */}
                        <div className="flex flex-col  justify-center items-start pl-8 pr-4 text-left space-y-4">
                            <h1 className="text-lg md:text-3xl font-bold text-white">⚡99.9% System Uptime</h1>
                            <button className="btn btn-primary">See Story</button>
                        </div>


                    </div>
                </div>







            </div>
        </>
    );
};

export default Achievements;