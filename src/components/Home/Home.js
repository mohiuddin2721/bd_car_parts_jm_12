import React from 'react';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import BsSummary from './BsSummary';
import CarParts1 from './CarParts1';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner1></Banner1>
            <CarParts1></CarParts1>
            <Parts></Parts>
            <BsSummary></BsSummary>
            <Banner2></Banner2>
        </div>
    );
};

export default Home;