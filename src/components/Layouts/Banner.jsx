import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';




const Banner = () => {
    return (

        <div className=' flex justify-center md:flex-row flex-col items-center py-30 md:max-w-11/12 mx-auto gap-5'>

            <div className='md:w-6/12 w-10/12'>
                <h1 className="text-3xl md:text-6xl font-bold text-purple-400">Pay your <span className='text-yellow-500'>Utilities!</span> <br />
                    Just by one <span className='text-blue-500'>CLICk!</span></h1>
                <p className="py-6 text-md md:text-xl text-gray-400">
                    Power Up Your Payments with Precision — Take control of your business finances with our advanced billing system designed for accuracy, speed, and simplicity. Whether you're managing invoices, tracking payments, or analyzing financial data, our platform ensures every transaction is recorded with exact detail.


                </p>
                <div className="grid w-fit grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Get Started */}
                    <button
                        className="relative inline-flex items-center justify-center px-3 py-3 md:px-8 md:py-4 font-bold text-sm md:text-lg text-white rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-blue-500 overflow-hidden transition-all duration-300 group"
                    >
                        <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10 rounded-full"></span>
                        <span className="relative z-10">Get Started</span>
                    </button>

                    {/* Best Offers */}
                    <button
                        className="relative inline-flex items-center justify-center px-3 py-3 md:px-8 md:py-4 font-bold text-sm md:text-lg text-white rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-red-400 overflow-hidden transition-all duration-300 group"
                    >
                        <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10 rounded-full"></span>
                        <span className="relative z-10">Best Offers</span>
                    </button>

                    {/* Start Free Trial */}
                    <button
                        className="relative inline-flex items-center justify-center px-3 py-3 md:px-8 md:py-4 font-bold text-sm md:text-lg text-white rounded-full shadow-lg bg-gradient-to-r from-green-400 to-teal-500 overflow-hidden transition-all duration-300 group"
                    >
                        <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10 rounded-full"></span>
                        <span className="relative z-10">Start Free Trial</span>
                    </button>
                </div>
            </div>


            <Swiper
                className="w-11/12 md:w-6/12 h-50 md:h-96 "
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide className="flex items-center justify-center">

                    <div className="h-45 md:h-96 flex items-center justify-center w-full">
                        <img
                            className="w-20 md:w-60 animate-pulse"
                            src="/assets/nagad-preview.png"
                            alt="nagad"
                        />
                    </div>

                </SwiperSlide>

                <SwiperSlide className=" flex items-center justify-center">
                    <div className="h-45 md:h-96 flex items-center justify-center w-full">
                        <img
                            className="w-20 md:w-60 animate-pulse"
                            src="/assets/bkash-preview.png"
                            alt="nagad"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-45 md:h-96 flex items-center justify-center w-full">
                        <img
                            className="w-20 md:w-60 animate-pulse"
                            src="/assets/wasa-preview.png"
                            alt="nagad"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-45 md:h-96 flex items-center justify-center w-full">
                        <img
                            className="w-20 md:w-60 animate-pulse"
                            src="/assets/sure-preview.png"
                            alt="nagad"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-45 md:h-96 flex items-center justify-center w-full">
                        <img
                            className="w-20 md:w-60 animate-pulse"
                            src="/assets/rocket-preview.png"
                            alt="nagad"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-45 md:h-96 flex items-center justify-center w-full">
                        <img
                            className="w-20 md:w-60 animate-pulse"
                            src="/assets/upay-preview.png"
                            alt="nagad"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-45 md:h-96 flex items-center justify-center w-full">
                        <img
                            className="w-20 md:w-60 animate-pulse"
                            src="/assets/bakhrabad-preview.png"
                            alt="nagad"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-45 md:h-96 flex flex-col space-y-2 items-center justify-center w-full">
                        <img
                            className="w-20 md:w-60 animate-pulse"
                            src="/assets/water.png"
                            alt="nagad"
                        />
                        <h1 className='text-center md:text-4xl uppercase text-indigo-300 font-bold italic'>Dhaka Wasa</h1>
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>

    );
};

export default Banner;