import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://cryptic-tor-43534.herokuapp.com/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
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
                })
                .then(data => {
                    // console.log(data);
                    setMyOrders(data)
                })
        }
    }, [user])

    return (
        <div>
            <h1 className='my-2 text-green-600 font-bold text-2xl'>My all orders... <span className='font-bold'>{myOrders?.length}</span></h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Items</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.map((mo, index) =>
                                <tr key={mo._id}>
                                    <th>{index + 1}</th>
                                    <td>{mo.name}</td>
                                    <td>{mo.items || "Best Item"}</td>
                                    <td>{mo.quantity}</td>
                                    <td>{mo.address}</td>
                                    <td>{mo.price} $</td>
                                    <td>
                                        {(mo.price && !mo.paid) && <Link to={`payment/${mo._id}`} className='btn btn-xs btn-success'> pay</Link>}
                                        {(mo.price && mo.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>Transaction Id: {mo.transactionId}</p>
                                            </div>}
                                    </td>
                                    <td>{(mo.price && !mo.paid) && <button className="btn btn-xs btn-error">Delete</button>}</td>
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