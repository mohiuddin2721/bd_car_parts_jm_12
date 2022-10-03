import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const { data: parts, isLoading } = useQuery('parts', () =>
        fetch('https://cryptic-tor-43534.herokuapp.com/parts', {
            method: 'GET',
        })
            .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mb-16 mx-8'>
            <h1 className='section-title'><span className='text-4xl font-bold'>WHAT WE </span> <span className='text-4xl font-thin'>OFFER</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                {
                    parts?.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;