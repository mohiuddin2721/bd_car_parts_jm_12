import React from 'react';
import { toast } from 'react-toastify';

const DeleteUserOrderModal = ({ deletingOrderItem, setDeletingOrderItem, refetch }) => {
    const { items, quantity, price, _id } = deletingOrderItem;

    const handleOrderDelete = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.success(`Order: ${items} is deleted`);
                    setDeletingOrderItem(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-user-order-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure!! You want to delete "<span className='text-green-500'>{items}</span>" your order??</h3>
                    <p>Quantity: {quantity}</p>
                    <p>Total price: {price}</p>
                    <div className="modal-action">
                        <button onClick={() => handleOrderDelete(_id)} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-user-order-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUserOrderModal;