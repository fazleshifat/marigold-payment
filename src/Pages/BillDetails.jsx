import React from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import Footer from '../components/Layouts/Footer';
import { useState } from 'react';
import { use } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const BillDetails = () => {

    const { balance, setBalance } = use(AuthContext);

    const navigate = useNavigate();

    const billData = useLoaderData();
    const { id } = useParams();
    const [bills, setBills] = useState(0);
    // console.log(typeof id)

    const bill = billData.find((eachBill) => eachBill.id === parseInt(id));

    const [selectedBank, setSelectedBank] = useState("");
    const [error, setError] = useState('');
    const [disable, setDisable] = useState(false);

    const handleBillPay = (e) => {
        e.preventDefault();

        if (!selectedBank) {
            setError("⚠️Please select a bank before proceeding.");
            toast("⚠️Please select a bank before proceeding.");
            return;
        }

        setError("");
        setDisable(true);
        setBalance(balance - bill.amount);
        toast.success('✅ Bill Paid Successfully!');

        const paidBills = JSON.parse(localStorage.getItem('paidBills')) || [];
        if (!paidBills.includes(bill.id)) {
            paidBills.push(bill.id);
            localStorage.setItem('paidBills', JSON.stringify(paidBills));
        }

        setTimeout(() => {
            navigate('/bills-page');
        }, 1000);
    };



    useEffect(() => {
        const paidBills = JSON.parse(localStorage.getItem('paidBills')) || [];
        if (paidBills.includes(bill.id)) {
            setDisable(true);
        }
    }, [bill.id]);



    const handleDuplicateBillPay = () => {
        toast('🛑Bill Already Paid!')
    }






    return (
        <>
            <div className="w-11/12 mx-auto py-10 grid grid-cols-1 items-center gap-6  pt-26 rounded-2xl">

                <div className='mx-auto bg-white/10 space-y-3 p-2 md:py-4 md:px-6 rounded-2xl'>
                    <h1 className='text-2xl md:text-4xl text-purple-400 font-bold text-center'>Bill Details</h1>
                    <p className='text-sm md:text-lg text-center p-2 rounded-full bg-amber-300 font-semibold'>Please Pay your bill from here</p>
                </div>

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


                        {/* Dropdown to select bank */}
                        <select
                            className="select select-bordered md:w-fit w-full text-black  required:"
                            value={selectedBank}
                            onChange={(e) => {
                                setSelectedBank(e.target.value);
                                if (e.target.value) {
                                    setError(""); // ✅ Clear error when bank is selected
                                }
                            }}
                        >
                            <option value="">Select Bank</option>
                            <option value="DBBL">Dutch-Bangla Bank</option>
                            <option value="Bkash">bKash</option>
                            <option value="Nagad">Nagad</option>
                            <option value="Rocket">Rocket</option>
                        </select>

                        <p className='text-red-500'>{error}</p>

                        {
                            !disable ? (
                                <button
                                    onClick={handleBillPay}
                                    className="btn w-full md:w-42 btn-success px-6 text-white font-bold"
                                >
                                    Pay bills
                                </button>
                            ) : (
                                <button
                                    onClick={handleDuplicateBillPay}
                                    className="btn w-full md:w-42 bg-warning text-black font-bold"
                                >
                                    Paid...✅!
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </>
    );
};

export default BillDetails;