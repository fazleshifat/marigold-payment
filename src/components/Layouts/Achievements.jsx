import React from 'react';

const Achievements = () => {
    return (
        <>
            <h1 className='text-5xl text-purple-900 text-center font-bold py-10'>Our Achievements<span className='text-amber-400 font-extrabold'>|</span></h1>
            <div className='grid md:grid-cols-3 grid-cols-1 max-w-11/12 gap-10 mx-auto py-24'>


                <div
                    className="hero h-80 bg-center bg-contain bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url(/assets/bills.jpg)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl font-bold">🏆10,000+ Bills Processed Securely</h1>
                            <button className="btn btn-primary">See Story</button>
                        </div>
                    </div>
                </div>

                <div
                    className="hero h-80 bg-no-repeat bg-center bg-contain"
                    style={{
                        backgroundImage:
                            "url(/assets/services.jpg)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl font-bold">🌍Serving Across 25+ Areas</h1>

                            <button className="btn btn-primary">See story</button>
                        </div>
                    </div>
                </div>

                <div
                    className="hero h-80 bg-center bg-contain bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url(/assets/uptime.jpg)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl font-bold">⚡99.9% System Uptime</h1>

                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>



                <div
                    className="hero h-80 bg-center bg-contain bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url(/assets/reduction.jpg)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl font-bold">📈40% Reduction in Late Payments</h1>

                            <button className="btn btn-primary">See Story</button>
                        </div>
                    </div>
                </div>



                <div
                    className="hero h-80 bg-center bg-contain bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url(/assets/trust.jpg)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl font-bold">🧑‍💼Trusted by 50+ Admins</h1>

                            <button className="btn btn-primary">See Story</button>
                        </div>
                    </div>
                </div>



                <div
                    className="hero h-80 bg-center bg-contain bg-no-repeat"
                    style={{
                        backgroundImage: "url(/assets/stars.png)",
                    }}
                >
                    {/* Custom overlay */}
                    <div className="hero-overlay"></div>

                    {/* Content */}
                    <div className="hero-content relative z-20 text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl font-bold">🚀Growing with 5-Star Feedback</h1>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>





            </div>
        </>
    );
};

export default Achievements;