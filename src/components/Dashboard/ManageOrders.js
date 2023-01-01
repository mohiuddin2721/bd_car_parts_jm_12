import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageAllOrderRows from './ManageAllOrderRows';

const ManageOrders = () => {
    const tableHeader = ['No.', 'User', 'Product', 'Quantity', 'Cost', 'Status', 'Action'];
    const [childAction, setChildAction] = useState(false)

    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch('https://bd-car-parts-server.onrender.com/allOrders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>Manage all orders............</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            {
                                tableHeader.map(th =>
                                    <th>{th}</th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((allOrder, index) => <ManageAllOrderRows
                                key={allOrder._id}
                                index={index}
                                allOrder={allOrder}
                                refetch={refetch}
                                setChildAction={setChildAction}
                            ></ManageAllOrderRows>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            {
                                tableHeader.map(th =>
                                    <th>{th}</th>
                                )
                            }
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;