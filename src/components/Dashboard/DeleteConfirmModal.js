import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingItem, refetch, setDeletingItem }) => {
    const { name, _id } = deletingItem;

    const handleDelete = () => {
        fetch(`https://cryptic-tor-43534.herokuapp.com/parts/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Items: ${name} is deleted`);
                    setDeletingItem(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete ${name}</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error">Remove</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;