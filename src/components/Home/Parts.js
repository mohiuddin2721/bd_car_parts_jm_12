import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect( () => {
        fetch('https://cryptic-tor-43534.herokuapp.com/parts')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setParts(data);
        })
    },[])
    return (
        <div className='mb-16 mx-8'>
            <h1 className='section-title'><span className='text-4xl font-bold'>WHAT WE </span> <span className='text-4xl font-thin'>OFFER</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                {
                    parts.map(part => <Part
                    key={part._id}
                    part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;