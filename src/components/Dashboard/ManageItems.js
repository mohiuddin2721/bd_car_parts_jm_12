import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageItemsRow from './ManageItemsRow';

const ManageItems = () => {
    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('http://localhost:5000/parts', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(parts);

    return (
        <div>
            <h1>Manage your items..................{parts?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
        </div>
    );
};

export default ManageItems;