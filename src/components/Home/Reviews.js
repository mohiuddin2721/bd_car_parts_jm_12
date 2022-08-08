import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                <h1 className='section-title uppercase text-[25px] md:text-[40px] font-bold ml-8'>Businessmen's word</h1>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-4 mx-4'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <div>
                <Link className='btn btn-outline w-3/4 md:w-1/4 mx-auto flex btn-secondary rounded-full mt-6' to='/dashboard/addReview'>say something about us</Link>
            </div>
        </div>
    );
};

export default Reviews;