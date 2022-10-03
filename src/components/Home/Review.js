import React from 'react';
import Ratings from './Ratings';
import './Review.css';
// import { AiFillStar } from "react-icons/ai";

const Review = ({ review }) => {
    const { name, image, comment, ratting } = review;

    const arr = [];
    for (let i = 1; i <= ratting; i++) {
        arr.push(i);
    }

    return (
        <div data-aos="zoom-in-up" data-aos-duration="2000" className="review-card card w-xs-max bg-base-100 shadow-md duration-300 hover:shadow-2xl">
            <div className="avatar">
                <div className="review-img-div w-24 rounded-xl mx-auto mt-8 mb-0 ">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </div>
            </div>
            <div className="card-body items-center mt-0 mb-0 pt-1">
                <h2 className="card-title font-bold">{name}</h2>
                <p className='font-semibold'>{name}@gmail.com</p>
                <p className='leading-none'><small>{comment.slice(0, 60)}...</small></p>
            </div>
            <div>
                <p className='leading-none text-right mt-0 mb-2 mr-2'>
                    Ratting:
                    {/* <AiFillStar className='inline-block text-secondary items-center mb-1' /> */}
                    {
                        arr.map(a=><Ratings
                        key={a}
                        ></Ratings>)
                    }
                </p>
            </div>
        </div>
    );
};

export default Review;