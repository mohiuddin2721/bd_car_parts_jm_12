import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.png';

const NotFound = () => {
    return (
        <div className='h-screen'>
            <div className='w-96 mx-auto'>
                <img className='w-96' src={notFound} alt="" />
            </div>
            <div className='w-60 mx-auto'>
                <Link to='/home'>
                    <button className='btn btn-secondary'>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;