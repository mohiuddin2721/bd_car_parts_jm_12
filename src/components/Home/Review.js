import React from 'react';

const Review = ({ review }) => {
    const { name, image, comment, ratting } = review;

    return (
        <div className="card w-xs-max bg-base-100 shadow-xl">
            {/* <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure> */}
            <div className="avatar">
                <div className="w-24 rounded-xl mx-auto mt-8 mb-0">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </div>
            </div>
            <div className="card-body items-center text-center mt-0">
                <h2 className="card-title font-bold">{name}</h2>
                <p className='leading-none'><small>{comment.slice(0, 60)}...</small></p>
                <p className='leading-none'>Ratting: {ratting}</p>
            </div>
        </div>
    );
};

export default Review;