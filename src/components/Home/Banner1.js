import React from 'react';
import MainButton from '../extra/MainButton';
import './Banner1.css';

const Banner1 = () => {
    return (
        <section data-aos="zoom-in-left" data-aos-duration="2000" style={{backgroundImage: "url(https://i.ibb.co/CH4vPkt/bgCar3.webp)"}} className="banner-container bg-banner h-screen lg:h-[90vh] bg-fixed bg-no-repeat bg-cover mb-4 text-white">
            <div className="banner-content">
                <h2 className="text-left text-3xl lg:text-5xl uppercase font-bold text-white">
                    <span>BD CAR PARTS</span>
                </h2>
                <p className="w-[40ch] lg:w-[90ch] text-sm my-3">
                    Since 1984, BD CAR PARTS has been a leading provider
                    of cart parts to the land and offshore car parts markets. We now
                    offer products and services to multiple segments in parts,
                    completion, and production.
                </p>
                <MainButton><a href="#aboutUs">About Us</a></MainButton>
            </div>
        </section>
    );
};

export default Banner1;