import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrdersRow from './OrdersRow';
import { useState } from 'react';
import DeleteUserOrderModal from './DeleteUserOrderModal';

const MyOrders = () => {
    const [deletingOrderItem, setDeletingOrderItem] = useState(null);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const { data: myOrders, isLoading, refetch } = useQuery('orders', () => fetch(`https://bd-car-parts-server.onrender.com/orders?email=${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            // console.log('res', res)
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/')
            }
            return res.json()
        }));
    // console.log(myOrders);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='section-title m-2 mb-4 font-bold text-2xl'>All of my orders... <span className='font-bold'>{myOrders?.length}</span></h1>
            <div className="overflow-x-auto">
                <table className="table w-full mx-2">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Items</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.map((mo, index) => <OrdersRow
                                key={mo._id}
                                index={index}
                                mo={mo}
                                refetch={refetch}
                                setDeletingOrderItem={setDeletingOrderItem}
                            ></OrdersRow>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingOrderItem && <DeleteUserOrderModal
                    deletingOrderItem={deletingOrderItem}
                    refetch={refetch}
                    setDeletingOrderItem={setDeletingOrderItem}
                ></DeleteUserOrderModal>
            }
        </div>
    );
};

export default MyOrders;