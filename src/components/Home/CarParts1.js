import React from 'react';
import car1 from '../../images/car1.webp';
import car2 from '../../images/car2.webp';
import car3 from '../../images/car3.webp';

const CarParts1 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 mx-4'>
            <div style={{ background: `url(${car1})`, height: '200px' }} className="card shadow-xl">
                <div className="card-body">
                    <h2 className="card-title font-bold text-white">LAMPS & LIGHTS</h2>
                    <p className="text-white">MEGA SALE</p>
                    <p className="text-white text-xs">FROM $500</p>
                </div>
                <div class="card-actions">
                    <button class="btn btn-secondary">View Details</button>
                </div>
            </div>
            <div style={{ background: `url(${car2})`, height: '200px' }} className="card shadow-xl">
                <div className="card-body">
                <h2 className="card-title font-bold text-white">BODY PARTS</h2>
                    <p className="text-white">FOR ANY VEHICLE</p>
                    <p className="text-white text-xs">COUPE, SEDAN, SUV</p>
                </div>
                <div class="card-actions">
                    <button class="btn btn-secondary">View Details</button>
                </div>
            </div>
            <div style={{ background: `url(${car3})`, height: '200px' }} className="card shadow-xl">
                <div className="card-body">
                <h2 className="card-title font-bold text-white">ENGINE</h2>
                    <p className="text-white">SYSTEM</p>
                    <p className="text-white text-xs">PRICES REDUCTION</p>
                </div>
                <div class="card-actions">
                    <button class="btn btn-secondary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CarParts1;