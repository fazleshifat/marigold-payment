import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Footer from '../components/Layouts/Footer';

const BillsPage = () => {

    const billData = useLoaderData();
    // console.log(typeof billData[0].id)



    return (

        <>
            <div className="w-11/12 mx-auto py-10 pt-24 grid grid-cols-1 rounded-2xl">
                {billData.map((bill) => (
                    <div
                        key={bill.id}
                        className="w-full border-2 border-cyan-200 bg-[linear-gradient(135deg,_#A21CAF_0%,_#1E3A8A_100%)] text-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-12 my-5 p-2 md:px-5 items-center rounded-2xl"
                    >
                        {/* Image Section with Icon */}
                        <div className="md:col-span-4 p-1 grid place-items-center">
                            <div className="relative w-8/12 md:w-7/12">
                                <img
                                    className="w-full h-46 border-2 border-gray-300 p-1 md:p-3 rounded-2xl"
                                    src={bill.companyName}
                                    alt="company"
                                />
                                <div className="absolute bottom-0 right-0 bg-gray-300 p-2 md:p-3 rounded-br-2xl">
                                    <img src={bill.icon} className="w-6 md:w-12" alt="icon" />
                                </div>
                            </div>
                        </div>

                        {/* Text + Button Section */}
                        <div className="md:col-span-8 md:flex items-center justify-between grid-cols-1 gap-3 mt-4 md:mt-0">
                            {/* Bill Info Row */}
                            <div className="flex flex-wrap grid-flow-col auto-cols-max justify-center md:justify-start gap-1 md:gap-4 text-center md:text-left items-center">
                                <h2 className="card-title text-sm md:text-xl font-bold">{bill.organization}</h2>
                                <span>|</span>
                                <h2 className="card-title text-sm md:text-xl italic text-gray-400 capitalize">
                                    {bill.bill_type}
                                </h2>
                                <span>|</span>
                                <h2 className="card-title text-sm md:text-xl">
                                    Amount <span className="font-bold">{bill.amount} BDT</span>
                                </h2>
                                <span>|</span>
                                <h2 className="card-title text-sm md:text-xl font-semibold">
                                    Due date: {bill.due_date}
                                </h2>
                            </div>

                            {/* Button */}
                            <div className="grid items-center md:justify-end md:mt-0 mt-4">
                                <Link
                                    to={`/bills-details/${bill.id}`}
                                    className="btn bg-purple-500 px-4 md:px-6 text-white font-bold"
                                >
                                    See Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}


            </div>


            <Footer></Footer>
        </>

    );
};

export default BillsPage;