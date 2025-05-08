import React from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router';
import Footer from '../components/Layouts/Footer';
import { use } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';

const promiseCategory = fetch("/billCategory.json").then((res) => res.json());


const BillsPage = () => {

    const { selectedCategory, setSelectedCategory } = use(AuthContext);


    const categoryData = use(promiseCategory);

    const billData = useLoaderData();
    // console.log(typeof billData[0].id)

    const navigate = useNavigate();

    const handleCategoryChange = (e) => {
        const selectedName = e.target.value;
        setSelectedCategory(selectedName);
        navigate('/bills-page'); // Navigate to the target page
    };


    const filteredBills =
        selectedCategory.toLowerCase() !== "all"
            ? billData.filter(
                bill => bill.bill_type?.toLowerCase() === selectedCategory.toLowerCase()
            )
            : billData;



    return (

        <>
            <div className="w-11/12  mx-auto py-10 pt-24 grid grid-cols-1 rounded-2xl">
                <div className='mx-auto bg-white/10 space-y-3 p-2 md:py-4 md:px-6 rounded-2xl'>
                    <h1 className='text-2xl md:text-2xl text-purple-400 font-bold text-center'>All Your Pending Bills</h1>
                    <p className='text-sm md:text-sm text-center text-gray-800 p-2 rounded-full font-semibold'>
                        Please click the 'See Details' button to Check and PAY the bill
                    </p>

                    {selectedCategory && (
                        <div className="text-center mx-auto relative group text-lg font-semibold transition duration-300 ease-in-out">
                            <div className="dropdown dropdown-hover m-1 cursor-pointer text-gray-300 transition duration-300 ease-in-out">
                                <Link
                                    to="/bills-page"
                                    className="m-1 text-center underline w-fit mx-auto cursor-pointer group-hover:text-gray-200 transition duration-300 ease-in-out"
                                >
                                    Bills Category 🡇
                                </Link>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-[1999]"
                                >

                                    {categoryData.map(category => (
                                        <li key={category.id} className='text-black'><Link to='/bills-page' onClick={() => setSelectedCategory(category.name)}>
                                            {category.name}
                                        </Link></li>
                                    ))}


                                </ul>
                            </div>
                        </div>
                    )}



                </div>
                {filteredBills.map((bill) => {
                    const paidBillIds = JSON.parse(localStorage.getItem('paidBills')) || [];
                    const isPaid = paidBillIds.includes(bill.id);


                    return (

                        <div
                            key={bill.id}
                            className="w-full border-2 border-cyan-200 bg-[linear-gradient(135deg,_#1E3A8A_40%,_#A21CAF_90%)] text-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-12 my-5 p-2 md:px-5 items-center rounded-2xl"
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

                                    {/* Paid Status */}

                                    {isPaid && (
                                        <div className="flex items-center justify-center  mt-2 gap-1 font-semibold">


                                            <div className='text-center bg-warning text-black rounded-md p-2 w-full'>✅ Paid</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    );
                })}


            </div>

        </>

    );
};

export default BillsPage;