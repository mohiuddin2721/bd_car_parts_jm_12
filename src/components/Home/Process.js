import React from 'react';
import { FaCartPlus, FaCheckCircle, FaChevronRight, FaUserAlt } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

const Process = () => {
    return (
        <div className="max-w-7xl flex items-center justify-center mx-auto min-h-[30vh] my-36">
            <div className="w-full">
                <h1 className='section-title mb-16 text-4xl font-bold'>Ordering Process</h1>
                <div className="flex flex-col lg:flex-row">
                    <div data-aos="fade-down-right" data-aos-duration="2000" className="w-2/3 mx-auto lg:w-1/3 text-center px-6">
                        <div className="hover:scale-110 transition-all duration-300 bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                            <div className="w-1/3 bg-transparent text-2xl flex items-center justify-center icon-step">
                                <FaUserAlt />
                            </div>
                            <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                                <h2 className="font-bold text-sm">Personal Info</h2>
                                <p className="text-xs text-gray-600">Create Your Account</p>
                            </div>
                        </div>
                    </div>
                    <div className="rotate-90 lg:rotate-0 flex-1 flex items-center justify-center">
                        <FaChevronRight className='text-3xl' />
                    </div>
                    <div data-aos="fade-down-right" data-aos-duration="2000" className="w-2/3 mx-auto lg:w-1/3 text-center px-6">
                        <div className="hover:scale-110 transition-all duration-300 bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                            <div className="w-1/3 bg-transparent h-20 text-2xl flex items-center justify-center icon-step">
                                <FaCartPlus />
                            </div>
                            <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                                <h2 className="font-bold text-sm">Place Order</h2>
                                <p className="text-xs text-gray-600">
                                    Placing Order With Delivery Information
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rotate-90 lg:rotate-0 flex-1 flex items-center justify-center">
                        <FaChevronRight className='text-3xl' />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="2000" className="w-2/3 mx-auto lg:w-1/3 text-center px-6">
                        <div className="hover:scale-110 transition-all duration-300 bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                            <div className="w-1/3 bg-transparent h-20 text-2xl flex items-center justify-center icon-step">
                                <GiReceiveMoney />
                            </div>
                            <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                                <h2 className="font-bold text-sm">Payment</h2>
                                <p className="text-xs text-gray-600">
                                    Make Payment For Your Order
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rotate-90 lg:rotate-0 flex-1 flex items-center justify-center">
                        <FaChevronRight className='text-3xl' />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="2000" className="w-2/3 mx-auto lg:w-1/3 text-center px-6">
                        <div className="hover:scale-110 transition-all duration-300 bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                            <div className="w-1/3 bg-transparent h-20 text-2xl flex items-center justify-center icon-step">
                                <FaCheckCircle />
                            </div>
                            <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                                <h2 className="font-bold text-sm">Confirmation</h2>
                                <p className="text-xs text-gray-600">Order Complete</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;