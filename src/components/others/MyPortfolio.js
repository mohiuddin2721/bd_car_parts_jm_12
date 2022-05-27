import React from 'react';
import profile from '../../images/profile.jpeg';
import { AiFillLinkedin } from "react-icons/ai";

const MyPortfolio = () => {
    return (
        <div>
            <h2 className='text-green-600 text-center font-bold my-3 text-4xl'>MY SELF</h2>
            <div className="h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className='flex justify-center'>
                    <img className='w-80 rounded-md' src={profile} alt="K M Mohiuddin Patwary" />
                </div>
                <div className='flex justify-center items-center my-4'>
                    <div className='pl-4'>
                        <h2 className='font-bold text-4xl hover:text-orange-500'>K M Mohiuddin Patwary</h2>
                        <p className='font-bold text-green-600 text-xl'>Study:</p>
                        <p className='font-bold hover:text-orange-500'>Graduate from University of Dhaka. Masters running.</p>
                        <p className='font-bold hover:text-orange-500'>Complete web development course from Programing Hero.</p>
                        <p className='font-bold text-green-600 text-xl'>Skills:</p>
                        <p className='font-bold hover:text-orange-500'>JavaScript, ReactJs, Mongodb, NodeJs, HTML, CSS</p>
                        <p className='font-bold text-green-600 text-xl'>Projects:</p>
                        <p> <a className='font-bold text-blue-500 hover:text-orange-500' href="https://ac-stock-house.web.app/home">ac-stock-house</a> </p>
                        <p> <a className='font-bold text-blue-500 hover:text-orange-500' href="https://shawon-legal-consultant.web.app/">shawon-legal-consultant</a> </p>
                        <p className='font-bold text-green-600 text-xl'>I'm here</p>
                        <p>developermohiuddin1@gmail.com</p>
                        <p><a href="https://www.linkedin.com/in/k-m-mohiuddin-patwary/"><AiFillLinkedin className='text-3xl text-blue-500' /></a></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;