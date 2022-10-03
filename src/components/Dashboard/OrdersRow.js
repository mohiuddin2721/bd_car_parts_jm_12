import React from 'react';
import { Link } from 'react-router-dom';

const OrdersRow = ({ mo, index, setDeletingOrderItem }) => {

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{mo.name}</td>
            <td>{mo.items || "Best Item"}</td>
            <td>{mo.quantity}</td>
            <td>{mo.address}</td>
            <td>
                {(mo.price && !mo.paid) && <Link to={`payment/${mo._id}`} className='btn btn-xs btn-success'> pay {mo.price} $</Link>}
                {(mo.price && mo.paid) && <div>
                    <p><span className='text-success'>Paid {mo.price} $</span></p>
                    <p>Transaction Id: {mo.transactionId}</p>
                </div>}
            </td>
            <td>{(mo.price && !mo.paid) && <label onClick={() => setDeletingOrderItem(mo)} htmlFor="delete-user-order-confirm-modal" className="btn btn-xs btn-error">Delete</label>}</td>
        </tr>
    );
};

export default OrdersRow;