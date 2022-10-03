import React from 'react';
import bgCar1 from '../../images/bgCar1.webp';
// import parts1 from '../../images/parts1.webp';
import parts9 from '../../images/parts9.webp';
import parts6t from '../../images/parts6t.webp';

const Banner2 = () => {

    return (
        <div
            style={{ backgroundImage: `url(${bgCar1})` }}
            className='min-h-max bg-fixed bg-auto'>
            <h2 className='section-title text-secondary text-4xl my-4 font-bold ml-8'>BEST SELL</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div data-aos="fade-down-right" data-aos-duration="2000">
                    <div>
                        <img src={parts9} className='w-48 mx-auto' alt="" />
                    </div>
                    <div>
                        <p className='text-white my-2 ml-8 text-xl font-bold'>Gaido Super Alternator</p>
                        <p className='text-white ml-8'>Aluminum extrusion in Italy reaches very high standards, so much so that it is appreciated, and therefore in demand, from all over the world</p>
                        <p className='text-white ml-8'>Price: $45</p>
                    </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                    <div>
                        <img src={parts6t} className='w-48 mx-auto' alt="" />
                    </div>
                    <div>
                        <p className='text-white my-2 ml-8 text-xl font-bold'>CAR HEADLIGHTS</p>
                        <p className='text-white ml-8'>Automotive lighting industry. LED reflectors. Electronics manufacturers. Household products. RayVac specializes in applying a simulated chrome finish to non-porous base materials</p>
                        <p className='text-white ml-8'>Price: $35</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;