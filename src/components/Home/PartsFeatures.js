import React from 'react';
import { AiOutlineRotateLeft } from 'react-icons/ai';
import { FaDragon, FaServicestack, FaThumbtack } from 'react-icons/fa';
import swal from 'sweetalert';

const PartsFeatures = () => {
    return (
        <div className="py-20">
            <h1 className='section-title text-4xl font-bold pl-16'>Our Product Feature</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center max-w-7xl px-8 lg:mx-auto gap-20">
                <div className="flex-1">
                    <h2 className="text-xl lg:text-3xl font-bold uppercase my-6">
                        We Make Using Car Part Comfortable
                    </h2>
                    <p>
                        
                    </p>
                </div>
                <div className="flex-1 flex items-center gap-10 mx-auto">
                    <div
                        onClick={() => {
                            swal(
                                "",
                                {
                                    className: "rounded-3xl",
                                }
                            );
                        }}
                        className="w-26 h-36 lg:w-32  lg:h-44 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#29cae4] px-4 py-5 text-white border-b-4 border-[#20b8d1] rounded-2xl shadow-2xl shadow-gray-300"
                    >
                        <span className="mt-5 text-white">
                            <FaThumbtack className='bg-[#20b8d1] text-3xl px-2 py-1 rounded-lg' />
                        </span>
                        <div className="mt-4 lg:mt-7">
                            <p className="text-sm"></p>
                            <p className="text-[7px] lg:text-[10px]">
                                Tab the box to see details
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div
                            onClick={() => {
                                swal(
                                    "",
                                    {
                                        className: "rounded-3xl",
                                    }
                                );
                            }}
                            className="w-26 h-36 lg:w-32  lg:h-44 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#3d30ba] px-4 py-5 text-white border-b-4 border-[#3428a7] rounded-2xl shadow-2xl shadow-gray-300"
                        >
                            <span className="mt-5 text-white">
                                <FaServicestack className='bg-[#3428a7] text-4xl px-2 py-1 rounded-lg' />
                            </span>
                            <div className="mt-4 lg:mt-7">
                                <p className="text-sm"></p>
                                <p className="text-[7px] lg:text-[10px]">
                                    Tab the box to see details
                                </p>
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                swal(
                                    "",
                                    {
                                        className: "rounded-3xl",
                                    }
                                );
                            }}
                            className="w-26 h-36 lg:w-32  lg:h-44 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#c9d4e3] px-4 py-5 text-white border-b-4 border-[#b8c4d6] rounded-2xl shadow-2xl shadow-gray-300"
                        >
                            <span className="mt-5 text-white">
                                <AiOutlineRotateLeft className='bg-[#b8c4d6] text-4xl px-2 py-1 rounded-lg' />
                            </span>
                            <div className="mt-4 lg:mt-7">
                                <p className="text-sm"></p>
                                <p className="text-[7px] lg:text-[10px]">
                                    Tab the box to see details
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            swal(
                                "",
                                {
                                    className: "rounded-3xl",
                                }
                            );
                        }}
                        className="w-26 h-36 lg:w-32  lg:h-44 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#4c5071] px-4 py-5 text-white border-b-4 border-[#3b3f61] rounded-2xl shadow-2xl shadow-gray-300"
                    >
                        <span className="mt-5 text-white">
                            <FaDragon className='bg-[#3b3f61] text-4xl px-2 py-1 rounded-lg' />
                        </span>
                        <div className="mt-4 lg:mt-7">
                            <p className="text-sm"></p>
                            <p className="text-[7px] lg:text-[10px]">
                                Tab the box to see details
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsFeatures;