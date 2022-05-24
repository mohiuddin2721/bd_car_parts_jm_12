import React from 'react';

const Review = ({ review }) => {
    const { name, image, comment, ratting } = review;
    
    return (
        <div className="card w-xs-max bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{name}</h2>
                <p className='leading-none'><small>{comment.slice(0, 60)}...</small></p>
                <p className='leading-none'>Ratting: {ratting}</p>
            </div>
        </div>
    );
};

export default Review;