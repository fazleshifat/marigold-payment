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

        <div className='flex justify-center items-center max-w-11/12 mx-auto py-12 gap-5'>

            <div className='w-6/12'>
                <h1 className="text-6xl font-bold text-purple-800">Reliable Invoicing,
                    <br />
                    Real-Time Results.!</h1>
                <p className="py-6 text-lg">
                    Power Up Your Payments with Precision — Take control of your business finances with our advanced billing system designed for accuracy, speed, and simplicity. Whether you're managing invoices, tracking payments, or analyzing financial data, our platform ensures every transaction is recorded with exact detail. Say goodbye to manual errors and delayed payments — experience the power of precision-driven billing that keeps your operations smooth and your clients satisfied.


                </p>
                <div className='grid w-fit grid-cols-3 gap-2'>
                    <button className="btn btn-primary p-8 rounded-full font-bold text-lg">Get Started</button>
                    <button className="btn btn-warning p-8 rounded-full font-bold text-lg">Best offers</button>
                    <button className="btn btn-success text-white p-8 rounded-full font-bold text-lg">Start free trial</button>

                </div>
            </div>


            <Swiper

                className='w-6/12'
                modules={[Navigation,Pagination, A11y]}

                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img className='w-full mx-auto' src="/assets/slide-4.png" alt="slide"  />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-10/12 mx-auto' src="/assets/slide-1.png" alt="slide"  />
                </SwiperSlide>
{/* 
                <SwiperSlide>
                    <img className='w-10/12 mx-auto' src="/assets/slide-2.jpg" alt="slide"  />
                </SwiperSlide> */}

                <SwiperSlide>
                    <img className='w-10/12 mx-auto' src="/assets/slide-3.png" alt="slide"  />

                </SwiperSlide>


            </Swiper>

        </div>

    );
};

export default Banner;