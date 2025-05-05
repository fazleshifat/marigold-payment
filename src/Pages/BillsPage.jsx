import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BillsPage = () => {

    const billData = useLoaderData();
    // console.log(typeof billData[0].id)



    return (

        <div className="w-11/12 mx-auto my-10 flex flex-col items-center rounded-2xl">

            {billData.map((bill) =>

                <div key={bill.id} className='w-full bg-base-300 shadow-sm flex flex-col md:flex-row my-5 p-2 md:p-4 items-center rounded-2xl'>

                    <div className='w-full md:w-4/12 rounded-2xl p-3 flex justify-center'>
                        <img
                            className='w-8/12 md:w-7/12 md:h-58 border-2 border-gray-300 p-1 md:p-3 rounded-2xl'
                            src={bill.companyName}
                            alt="company"
                        />
                    </div>

                    <div className="w-full md:flex md:flex-row flex-col md:justify-around md:items-center space-y-3 md:space-y-0 mt-4 md:mt-0">

                        <div className='flex flex-wrap justify-center md:justify-start gap-2 md:gap-8 text-center md:text-left'>
                            <h2 className="card-title text-sm md:text-xl font-bold">{bill.organization}</h2>
                            <span className='hidden md:inline'>|</span>
                            <h2 className="card-title text-sm md:text-xl italic text-gray-400 capitalize">{bill.bill_type}</h2>
                            <span className='hidden md:inline'>|</span>
                            <h2 className="card-title text-sm md:text-xl">Amount <span className='font-bold'>{bill.amount} BDT</span></h2>
                            <span className='hidden md:inline'>|</span>
                            <h2 className="card-title text-sm md:text-xl font-semibold">Due date: {bill.due_date}</h2>
                        </div>

                        <div className='flex justify-center md:justify-end mt-4 md:mt-0'>
                            <Link to={`/bills-details/${bill.id}`} className="btn btn-primary px-4 md:px-6 text-white font-bold">
                                See Details
                            </Link>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default BillsPage;