import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({part}) => {
    const {_id, name, image, description, orderQuantity, availableQuantity, price} = part;
    return (
        <div className="card lg:card-side bg-base-100 mt-8 shadow-md duration-300 hover:shadow-2xl">
            <figure><img src={image} className="w-48" alt="" /></figure>
            <div className="card-body duration-300 hover:bg-[#f4f0e3]">
                <h2 className="card-title">{name}</h2>
                <p className='tracking-tight text-sm'>{description.slice(0, 50)}...</p>
                <p className='leading-none'><small>Minimum Order: {orderQuantity}</small></p>
                <p className='leading-none'><small>Available Quantity: {availableQuantity}</small></p>
                <p className='leading-none'>Price: <span className='font-bold'>${price}</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/purchase/${_id}`}><button className="btn btn-xs btn-secondary">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Part;