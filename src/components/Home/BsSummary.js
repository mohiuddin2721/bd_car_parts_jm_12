import React from 'react';
import { FaSortAmountUp, FaUsers, FaTools } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const BsSummary = () => {
    return (
        <div className='my-16'>
            <h1 className='text-primary text-center text-2xl font-bold'>MILLIONS BUSINESS TRUST US</h1>
            <p className='text-center'>TRY TO UNDERSTAND USERS EXPECTATION</p>
            {/* <div className="divider w-48 items-center mx-auto mt-0">  </div> */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 pt-4'>
                <div>
                    <FaUsers className='text-8xl mx-auto' />
                    <p className='text-center font-bold text-2xl text-secondary'>109</p>
                    <p className='text-center text-xl'><small>Countries</small></p>
                </div>
                <div>
                    <FaSortAmountUp className='text-8xl mx-auto' />
                    <p className='text-center font-bold text-2xl text-secondary'>150M</p>
                    <p className='text-center text-xl'><small>Annual Revenue</small></p>
                </div>
                <div>
                    <FaTools className='text-8xl mx-auto' />
                    <p className='text-center font-bold text-2xl text-secondary'>60+</p>
                    <p className='text-center text-xl'><small>Tools</small></p>
                </div>
                <div>
                    <FcLike className='text-8xl mx-auto' />
                    <p className='text-center font-bold text-2xl text-secondary'>63k</p>
                    <p className='text-center text-xl'><small>Reviews</small></p>
                </div>
            </div>
        </div>
    );
};

export default BsSummary;