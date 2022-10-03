import React from 'react';
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import { FaUsers } from "react-icons/fa";
import { BsFlagFill } from "react-icons/bs";
import { GiDeliveryDrone } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";

const BsSummary = () => {

    return (
        <section>
            <div className="pt-12 px-5">
                <h1 className='section-title text-2xl md:text-4xl font-bold'>We Delivered car parts All Over The World</h1>
                <div>
                    <div className="summery-inside-banner">
                        <div className="grid grid-cols-1 py-10 gap-5 md:grid-cols-2 lg:grid-cols-4">
                            <div className="lg:mx-10 rounded-2xl p-4 bg-white text-gray-500 hover:text-primary flex flex-col justify-center">
                                <div className="text-6xl py-5 mb-2 px-[1.45rem] cursor-text mx-auto transition-all duration-300">
                                    
                                <BsFlagFill className='text-8xl mx-auto' />
                                </div>
                                <div data-aos="fade-down-right" data-aos-duration="2000" className="text-center">
                                    <CountUp start={0} end={49} duration={2}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span
                                                    className="text-4xl my-2 text-primary font-semibold"
                                                    ref={countUpRef}
                                                />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                    <span className="text-4xl my-2 text-primary font-semibold">
                                        +
                                    </span>
                                    <p className="text-2xl font-semibold my-2 uppercase font-mono">
                                        TOTAL AWARDS
                                    </p>
                                </div>
                            </div>
                            <div className="lg:mx-10 rounded-2xl p-4 bg-white text-gray-500 hover:text-primary  flex flex-col justify-center">
                                <div className="text-6xl py-5 mb-2 px-[1.45rem] cursor-text mx-auto transition-all duration-300">
                                    
                                    <GiDeliveryDrone className='text-8xl mx-auto' />
                                </div>
                                <div data-aos="fade-down-right" data-aos-duration="2000" className="text-center">
                                    <CountUp start={0} end={500} duration={2}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span
                                                    className="text-4xl my-2 text-primary font-semibold"
                                                    ref={countUpRef}
                                                />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                    <span className="text-4xl my-2 text-primary font-semibold">
                                        K+
                                    </span>
                                    <p className="text-2xl font-semibold my-2 uppercase font-mono">
                                        TOTAL deliveries
                                    </p>
                                </div>
                            </div>
                            <div className="lg:mx-10 rounded-2xl p-4 bg-white text-gray-500 hover:text-primary  flex flex-col justify-center">
                                <div className="text-6xl py-5 mb-2 px-[1.45rem] cursor-text mx-auto transition-all duration-300">
                                    
                                    <FaUsers className='text-8xl mx-auto' />
                                </div>
                                <div data-aos="fade-down-left" data-aos-duration="2000" className="text-center">
                                    <CountUp start={0} end={70} duration={2}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span
                                                    className="text-4xl my-2 text-primary font-semibold"
                                                    ref={countUpRef}
                                                />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                    <span className="text-4xl my-2 text-primary font-semibold">
                                        K+
                                    </span>
                                    <p className="text-2xl font-semibold my-2 uppercase font-mono">
                                        Happy clients
                                    </p>
                                </div>
                            </div>
                            <div className="lg:mx-10 rounded-2xl p-4 bg-white text-gray-500 hover:text-primary   flex flex-col justify-center">
                                <div className="text-6xl py-5 mb-2 px-[1.45rem] cursor-text mx-auto transition-all duration-300">
                                    
                                    <AiFillLike className='text-8xl mx-auto' />
                                </div>
                                <div data-aos="fade-down-left" data-aos-duration="2000" className="text-center">
                                    <CountUp start={0} end={10} duration={2}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span
                                                    className="text-4xl my-2 text-primary font-semibold"
                                                    ref={countUpRef}
                                                />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                    <span className="text-4xl my-2 text-primary font-semibold">
                                        K+
                                    </span>
                                    <p className="text-2xl font-semibold my-2 uppercase font-mono">
                                        positive Feedbacks
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BsSummary;