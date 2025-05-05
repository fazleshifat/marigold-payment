import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const BillDetails = () => {

    const billData = useLoaderData();
    const { id } = useParams();
    // console.log(typeof id)

    const bill = billData.find((eachBill) => eachBill.id === parseInt(id));

    return (
        <>
            <div className="w-11/12 mx-auto my-10 flex flex-col items-center rounded-2xl gap-6">

                <div key={bill.id} className='w-full md:w-6/12 bg-base-300 shadow-sm rounded-2xl flex flex-col md:flex-row my-5 p-4 items-center'>

                    <div className='w-full md:w-5/12 rounded-2xl p-3 flex justify-center'>
                        <img
                            className='w-full md:w-10/12 border-2 border-gray-300 p-3 rounded-xl'
                            src={bill.companyName}
                            alt="company"
                        />
                    </div>

                    <div className="w-full md:w-7/12 space-y-4 text-center md:text-left mt-4 md:mt-0">

                        <h2 className="card-title text-xl font-bold">{bill.organization}</h2>
                        <h2 className="card-title italic text-gray-400 capitalize">{bill.bill_type} bill</h2>
                        <h2 className="card-title">Amount <span className='font-bold'>{bill.amount} BDT</span></h2>
                        <h2 className="card-title font-semibold">Due date: {bill.due_date}</h2>

                        <Link to={`/bills-details/${bill.id}`} className="btn btn-success px-6 text-white font-bold">
                            Pay bills
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default BillDetails;