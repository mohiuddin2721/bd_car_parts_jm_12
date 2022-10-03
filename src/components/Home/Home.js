import React from 'react';
import AboutUs from './AboutUs';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import BsSummary from './BsSummary';
import CarParts1 from './CarParts1';
import Parts from './Parts';
import PartsFeatures from './PartsFeatures';
import Process from './Process';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner1></Banner1>
            <CarParts1></CarParts1>
            <BsSummary></BsSummary>
            <Parts></Parts>
            <PartsFeatures></PartsFeatures>
            <Banner2></Banner2>
            <Reviews></Reviews>
            <Process></Process>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;