import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const BillDetails = () => {

    const billData = useLoaderData();
    const { id } = useParams();
    // console.log(typeof id)

    const bill = billData.find((eachBill) => eachBill.id === parseInt(id));

    return (
        <>
            <div className="w-10/12 mx-auto my-10 flex flex-col items-center rounded-2xl">

                <div key={bill.id} className='w-6/12 bg-base-300 shadow-sm rounded-2xl flex my-5 p-4 items-center'>
                    <div className='w-11/12 rounded-2xl p-3 flex'>
                        <img
                            className='w-10/12 border-2 border-gray-300 p-3 rounded-xl'
                            src={bill.companyName}
                            alt="company"

                        />
                    </div>

                    <div className="w-full space-y-4">

                        <h2 className="card-title text-xl font-bold">{bill.organization}</h2>
                        <h2 className="card-title italic text-gray-400">{bill.bill_type}</h2>
                        <h2 className="card-title">Amount <span className='font-bold'>{bill.amount} BDT</span></h2>
                        <h2 className="card-title font-semibold">Due date: {bill.due_date} </h2>




                        <Link to={`/bills-details/${bill.id}`} className=" btn btn-success px-6 text-white font-bold">Pay bills</Link>


                    </div>
                </div>
            </div>
        </>
    );
};

export default BillDetails;