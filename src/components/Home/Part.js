import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({part}) => {
    const {id, name, image, description, orderQuantity, availableQuantity, price} = part;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
            <figure><img src={image} className="w-48" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='tracking-tight text-sm'>{description.slice(0, 50)}...</p>
                <p className='leading-none'><small>Minimum Order: {orderQuantity}</small></p>
                <p className='leading-none'><small>Available Quantity: {availableQuantity}</small></p>
                <p className='leading-none'>Price: {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/purchase/:${id}`}><button className="btn btn-xs btn-secondary">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Part;