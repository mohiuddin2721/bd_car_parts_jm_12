import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-tor-43534.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data);
            })
    }, [])
    return (
        <div className='my-12'>
            <div>
                <h1 className='section-title uppercase md:text-[40px] text-secondary font-bold ml-8'>Businessmen's word</h1>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-4 mx-4'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;