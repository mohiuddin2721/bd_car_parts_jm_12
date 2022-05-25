import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setMyOrders(data)
                })
        }
    }, [user])

    return (
        <div>
            <h1 className='my-2 text-green-600'>My all orders... <span className='font-bold'>{myOrders.length}</span></h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Items</th>
                            <th>Quantity</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((mo, index) =>
                                <tr key={mo._id}>
                                    <th>{index + 1}</th>
                                    <td>{mo.name}</td>
                                    <td>{mo.items || "Best Item"}</td>
                                    <td>{mo.quantity}</td>
                                    <td>{mo.address}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;