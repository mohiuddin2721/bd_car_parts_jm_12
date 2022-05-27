import React from 'react';

const ManageItemsRow = ({ part, index, setDeletingItem }) => {
    const { name, price, image, } = part;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded">
                        <img src={image} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{price} $</td>
            <td>
                <label onClick={() => setDeletingItem(part)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Remove</label>
            </td>
        </tr>
    );
};

export default ManageItemsRow;