import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import Footer from '../components/Layouts/Footer';

const BillDetails = () => {



    const billData = useLoaderData();
    const { id } = useParams();
    // console.log(typeof id)

    const bill = billData.find((eachBill) => eachBill.id === parseInt(id));

    return (
        <>
            <div className="w-11/12 mx-auto py-10 grid grid-cols-1 items-center gap-6  pt-26 rounded-2xl">
                <div
                    key={bill.id}
                    className="w-full mx-auto md:w-7/12 shadow-sm border-2 border-cyan-200 bg-[linear-gradient(135deg,_#A21CAF_0%,_#1E3A8A_100%)] text-white rounded-2xl grid grid-cols-1 md:grid-cols-12 py-5 p-4 items-center"
                >

                    {/* Image Section */}
                    <div className="md:col-span-6 p-3 grid place-items-center">
                        <div className="relative w-8/12 md:w-10/12">
                            <img
                                className="w-full border-2 border-gray-300 p-3 rounded-xl"
                                src={bill.companyName}
                                alt="company"
                            />

                            {/* Icon - Bottom Right Corner with gray background and rounded-br */}
                            <div className="absolute bottom-0 right-0 bg-gray-300 p-2 md:p-3 rounded-br-2xl">
                                <img src={bill.icon} className="w-6 md:w-12" alt="icon" />
                            </div>
                        </div>
                    </div>

                    {/* Text + Button Section */}
                    <div className="md:col-span-6 space-y-4 text-center md:text-left mt-4 md:mt-0 grid">
                        <h2 className="card-title text-2xl font-bold">{bill.organization}</h2>
                        <h2 className="card-title italic text-gray-400 capitalize">{bill.bill_type} bill</h2>
                        <h2 className="card-title">
                            Amount <span className="font-bold">{bill.amount} BDT</span>
                        </h2>
                        <h2 className="card-title font-semibold">Due date: {bill.due_date}</h2>

                        <Link
                            to={`/bills-details/${bill.id}`}
                            className="btn w-full md:w-42 btn-success px-6 text-white font-bold"
                        >
                            Pay bills
                        </Link>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </>
    );
};

export default BillDetails;