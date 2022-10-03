import React from 'react';
import { Link } from 'react-router-dom';

const OrdersRow = ({ mo, index, refetch }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{mo.name}</td>
            <td>{mo.items || "Best Item"}</td>
            <td>{mo.quantity}</td>
            <td>{mo.address}</td>
            <td>{mo.price} $</td>
            <td>
                {(mo.price && !mo.paid) && <Link to={`payment/${mo._id}`} className='btn btn-xs btn-success'> pay</Link>}
                {(mo.price && mo.paid) && <div>
                    <p><span className='text-success'>Paid</span></p>
                    <p>Transaction Id: {mo.transactionId}</p>
                </div>}
            </td>
            <td>{(mo.price && !mo.paid) && <button className="btn btn-xs btn-error">Delete</button>}</td>
        </tr>
    );
};

export default OrdersRow;