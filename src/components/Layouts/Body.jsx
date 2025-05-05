import React from 'react';
import Banner from './Banner';
import Services from '../../Pages/Services';
import Collaboration from '../../Pages/Collaboration';
import MarqueeSection from '../MarqueeSection/MarqueeSection';
import Achievements from './Achievements';
import Offers from './Offers';
import Footer from './Footer';

const Body = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Collaboration></Collaboration>
            <Achievements></Achievements>
            <Offers></Offers>
            <Footer></Footer>
        </div>
    );
};

export default Body;