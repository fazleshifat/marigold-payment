import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BillsPage = () => {

    const billData = useLoaderData();
    console.log(typeof billData[0].id)



    return (

        <div className="w-11/12 mx-auto my-10 flex flex-col items-center rounded-2xl">

            {billData.map((bill) =>

                <div key={bill.id} className='w-full bg-base-300 shadow-sm flex my-5 p-4 items-center'>
                    <div className='w-4/12 rounded-2xl p-3 flex justify-center'>
                        <img
                            className='w-7/12 h-58 border-2 border-gray-300 p-3 rounded-xl'
                            src={bill.companyName}
                            alt="company"

                        />
                    </div>

                    <div className="w-full flex justify-around items-center">
                        <div className='flex items-center gap-8'>
                            <h2 className="card-title text-xl font-bold">{bill.organization}</h2>|
                            <h2 className="card-title italic text-gray-400">{bill.bill_type}</h2>|
                            <h2 className="card-title">Amount <span className='font-bold'>{bill.amount} BDT</span></h2>|
                            <h2 className="card-title font-semibold">Due date: {bill.due_date} </h2>|
                        </div>


                        <div className='justify-end'>
                            <Link to={`/bills-details/${bill.id}`} className=" btn btn-primary px-6 text-white font-bold">See Details</Link>

                        </div>
                    </div>
                </div>
            )};
        </div>
    );
};

export default BillsPage;