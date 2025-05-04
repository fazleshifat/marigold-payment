import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeSection = () => {
    return (
        <div className='max-w-10/12 py-14 space-y-22 mx-auto'>
            <Marquee pauseOnHover={true} speed={60}>
                <div className='flex gap-36'>
                    <img src="/assets/bkash.jpg" className='w-3/12 h-80 mx-6' alt="image" />
                    <img src="/assets/rocket.png" className='w-3/12 h-80' alt="image" />
                    <img src="/assets/nagad.jpg" className='w-3/12 h-80' alt="image" />
                    <img src="/assets/sure cash.png" className='w-3/12 h-80' alt="image" />
                    <img src="/assets/upay.jpg" className='w-3/12 h-80 mr-14' alt="image" />
                </div>
            </Marquee>

            
            <Marquee pauseOnHover={true} speed={60} direction='right'>
                <div className='flex gap-36'>
                    <img src="/assets/bkash.jpg" className='w-3/12 h-80 mx-6' alt="image" />
                    <img src="/assets/rocket.png" className='w-3/12 h-80' alt="image" />
                    <img src="/assets/nagad.jpg" className='w-3/12 h-80' alt="image" />
                    <img src="/assets/sure cash.png" className='w-3/12 h-80' alt="image" />
                    <img src="/assets/upay.jpg" className='w-3/12 h-80 mr-14' alt="image" />
                </div>
            </Marquee>


        </div>
    );
};

export default MarqueeSection;