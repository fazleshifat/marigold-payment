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

        <div className='flex justify-center md:flex-row flex-col items-center md:max-w-11/12 mx-auto md:mt-0 pt-26 py-12 gap-5'>

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

                className='w-11/12 md:w-6/12'
                modules={[Navigation, Pagination, A11y]}

                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img className='w-full mx-auto' src="/assets/slide-4.png" alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-10/12 mx-auto' src="/assets/slide-1.png" alt="slide" />
                </SwiperSlide>
                {/* 
                <SwiperSlide>
                    <img className='w-10/12 mx-auto' src="/assets/slide-2.jpg" alt="slide"  />
                </SwiperSlide> */}

                <SwiperSlide>
                    <img className='w-10/12 mx-auto' src="/assets/slide-3.png" alt="slide" />

                </SwiperSlide>


            </Swiper>

        </div>

    );
};

export default Banner;