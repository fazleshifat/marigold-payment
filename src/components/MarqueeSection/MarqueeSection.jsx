import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeSection = () => {
    return (
        <div className="max-w-screen-xl py-14 mx-auto space-y-10 px-4">
            {/* Left to right */}
            <Marquee pauseOnHover={true} speed={50}>
                <div className="flex gap-20 items-center">
                    <img src="/assets/bkash.jpg" className="ml-13 w-28 sm:w-36 md:w-40 lg:w-48 h-auto" alt="bkash" />
                    <img src="/assets/rocket.png" className="w-28 sm:w-36 md:w-40 lg:w-48 h-auto" alt="rocket" />
                    <img src="/assets/nagad.jpg" className="w-28 sm:w-36 md:w-40 lg:w-48 h-auto" alt="nagad" />
                    <img src="/assets/sure cash.png" className="w-28 sm:w-36 md:w-40 lg:w-48 h-auto" alt="sure cash" />
                    <img src="/assets/upay.jpg" className="w-28 sm:w-36 md:w-40 lg:w-48 h-auto" alt="upay" />
                </div>
            </Marquee>

            {/* Right to left + different speed */}
            <Marquee pauseOnHover={true} speed={30} direction="right">
                <div className="flex gap-20 items-center">
                    <img src="/assets/upay.jpg" className="ml-13 w-28 sm:w-36 md:w-40 lg:w-48 h-auto" alt="upay" />
                    <img src="/assets/sure cash.png" className="w-28 sm:w-36 md:w-40 lg:w-48 h-auto" alt="sure cash" />
                    <img src="/assets/nagad.jpg" className="w-28 sm:w-36 md:w-40 lg:w-48 h-auto" alt="nagad" />
                    <img src="/assets/rocket.png" className="w-28 sm:w-36 md:w-40 lg:w-48 h-auto" alt="rocket" />
                    <img src="/assets/bkash.jpg" className="w-28 sm:w-36 md:w-40 lg:w-48 h-auto" alt="bkash" />
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeSection;