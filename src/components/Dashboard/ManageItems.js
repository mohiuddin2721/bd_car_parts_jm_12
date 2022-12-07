import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageItemsRow from './ManageItemsRow';
import DeleteConfirmModal from './DeleteConfirmModal';

const ManageItems = () => {
    const [deletingItem, setDeletingItem] = useState(null);

    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://bd-car-parts-server-jm-12-production.up.railway.app/parts', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='section-title m-2 mt-4 font-semibold'>Total items: {parts?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-3/4 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Parts</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <ManageItemsRow
                                key={part._id}
                                part={part}
                                index={index}
                                refetch={refetch}
                                setDeletingItem={setDeletingItem}
                            ></ManageItemsRow>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Parts</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            {deletingItem && <DeleteConfirmModal
            deletingItem={deletingItem}
            refetch={refetch}
            setDeletingItem={setDeletingItem}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageItems;