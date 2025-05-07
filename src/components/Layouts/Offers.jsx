import React from 'react';

const Offers = () => {
    return (
        <div className='max-w-11/12 mx-auto py-16'>
            <h1 className='text-5xl text-center font-bold text-purple-400 py-14'>Our Best Offers<span className='text-amber-400 font-extrabold'>|</span></h1>

            <div className="flex flex-col md:flex-row justify-center gap-6 py-14 px-4 max-w-screen-xl mx-auto">
                {/* Basic Plan */}
                <div className="card w-full md:w-96 bg-pink-100/70 shadow-md border">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Starter Wallet</h2>
                        <p className="text-sm text-gray-500 mb-4">For personal use and small transfers</p>
                        <span className="text-xl font-semibold">$0/month</span>
                        <ul className="mt-6 space-y-2 text-sm">
                            <li className="flex items-center">
                                ✅ Free wallet-to-wallet transfers
                            </li>
                            <li className="flex items-center">
                                ✅ Add up to 2 payment methods
                            </li>
                            <li className="flex items-center">
                                ✅ Transaction history access
                            </li>
                           
                        </ul>
                        <button className="btn bg-sky-500 text-white btn-block mt-6">Get Started</button>
                    </div>
                </div>

                {/* Popular Plan */}
                <div className="card w-full md:w-96 bg-base-100 shadow-md border border-primary">
                    <div className="card-body relative">
                        <div className="absolute top-0 right-0 m-2 badge badge-warning">Most Popular</div>
                        <h2 className="text-2xl font-bold">Pro Wallet</h2>
                        <p className="text-sm text-gray-500 mb-4">For freelancers and power users</p>
                        <span className="text-xl font-semibold">$5/month</span>
                        <ul className="mt-6 space-y-2 text-sm">
                            <li className="flex items-center">
                                ✅ Unlimited transfers
                            </li>
                            <li className="flex items-center">
                                ✅ Link up to 5 payment methods
                            </li>
                            <li className="flex items-center">
                                ✅ Early access to new features
                            </li>
                            <li className="flex items-center">
                                ✅ Priority customer support
                            </li>
                            
                        </ul>
                        <button className="btn btn-success text-white    btn-block mt-6">Subscribe</button>
                    </div>
                </div>

                {/* Business Plan */}
                <div className="card w-full md:w-96 bg-purple-100/50 shadow-md border">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Business Suite</h2>
                        <p className="text-sm text-gray-500 mb-4">For startups and merchants</p>
                        <span className="text-xl font-semibold">$15/month</span>
                        <ul className="mt-6 space-y-2 text-sm">
                            <li className="flex items-center">
                                ✅ Multi-user access
                            </li>
                            <li className="flex items-center">
                                ✅ Business analytics dashboard
                            </li>
                            <li className="flex items-center">
                                ✅ API payment integration
                            </li>
                            <li className="flex items-center">
                                ✅ Dedicated support manager
                            </li>
                            <li className="flex items-center">
                                ✅ Instant bank withdrawals
                            </li>
                        </ul>
                        <button className="btn bg-sky-500 text-white btn-block mt-6">Upgrade Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Offers;