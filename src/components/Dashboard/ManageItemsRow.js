import React from 'react';
import { toast } from 'react-toastify';

const ManageItemsRow = ({ part, index, refetch }) => {
    const { name, price, image, _id } = part;

    const handleDelete = _id => {
        fetch(`http://localhost:5000/parts/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount) {
                toast.success(`Items: ${name} is deleted`)
                refetch();
            }
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-12 rounded">
                        <img src={image} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{price} $</td>
            <td><button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Remove</button></td>
        </tr>
    );
};

export default ManageItemsRow;