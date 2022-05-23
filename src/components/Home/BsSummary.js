import React from 'react';
import { AiOutlineFlag } from "react-icons/ai";
import { FaProjectDiagram, FaUsers } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const BsSummary = () => {
    return (
        <div className='my-16'>
            <p className='text-center text-primary text-2xl font-bold'>MILLIONS BUSINESS TRUST US</p>
            <p className='text-center'>TRY TO UNDERSTAND USERS EXPECTATION</p>
            <div className="divider w-48 items-center mx-auto mt-0">  </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2'>
                <div>
                    <AiOutlineFlag className='text-8xl mx-auto' />
                    <p className='text-center font-bold text-2xl text-secondary'>109</p>
                    <p className='text-center'><small>Countries</small></p>
                </div>
                <div>
                    <FaProjectDiagram className='text-8xl mx-auto' />
                    <p className='text-center font-bold text-2xl text-secondary'>749+</p>
                    <p className='text-center'><small>Delivery</small></p>
                </div>
                <div>
                    <FaUsers className='text-8xl mx-auto' />
                    <p className='text-center font-bold text-2xl text-secondary'>873+</p>
                    <p className='text-center'><small>Happy Clients</small></p>
                </div>
                <div>
                    <FcLike className='text-8xl mx-auto' />
                    <p className='text-center font-bold text-2xl text-secondary'>1245+</p>
                    <p className='text-center'><small>Reviews</small></p>
                </div>
            </div>
        </div>
    );
};

export default BsSummary;