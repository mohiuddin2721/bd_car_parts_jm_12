import React from 'react';
import { AiFillHourglass } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loading from '../Shared/Loading';
import { MdCancel } from 'react-icons/md';
import { GiCommercialAirplane } from 'react-icons/gi';

const ManageAllOrderRows = ({ allOrder, index, setChildAction, refetch }) => {
    // console.log(allOrder);
    const { name, price, items, quantity, paid, _id, status } = allOrder;
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth)

    const toastConfig = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    const handleCancelOrder = async () => {
        Swal.fire({
            text: 'Are you sure you want to cancel this order?',
            icon: 'error',
            title: "Cancel Order",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                setChildAction(true)
                try {
                    const deleteProduct = () => {
                        fetch(`https://bd-car-parts-server.onrender.com/shippedOrders/${_id}`, {
                            method: 'DELETE',
                            headers: {
                                authorization: `Bearer ${localStorage.getItem('accessToken')}`
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                // console.log(data);
                                if (data.acknowledged) {
                                    toast.success('Product cancelled successfully', toastConfig)
                                    refetch()
                                    setChildAction(false)
                                }
                                else {
                                    setChildAction(false)
                                    toast.error('Something went wrong', toastConfig)
                                }
                            })

                    }
                    deleteProduct()
                }
                catch (err) {
                    navigate('/')
                    toast.error('Something Went Wrong', toastConfig)
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                }
            }
        })
    }

    const handleShipOrder = () => {
        Swal.fire({
            text: 'Are you sure you want to ship this order?',
            icon: 'info',
            title: "Ship Order",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                setChildAction(true)
                try {
                    const shipOrder = async () => {
                        fetch(`https://bd-car-parts-server.onrender.com/allOrdersShipped/${_id}`, {
                            method: 'PATCH',
                            headers: {
                                'content-type': 'application/json',
                                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    toast.success('Product shipped successfully', toastConfig)
                                    refetch()
                                    setChildAction(false)
                                }
                                else {
                                    toast.error('Something went wrong', toastConfig)
                                    setChildAction(false)
                                }
                            })

                    }
                    shipOrder()
                }
                catch (err) {
                    navigate('/')
                    toast.error('Something Went Wrong', toastConfig)
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                }
            }
        })
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td className='font-semibold'>{name}</td>
            <td className='font-semibold'>{items}</td>
            <td className='font-semibold'>{quantity}</td>
            <td className='font-semibold'>$ {price} {(price === 900 || price > 900) && <span className='text-xs font-bold text-blue-600 mb-8'>
            <span className="indicator-item badge badge-secondary text-2xs">HIGH</span>
            </span>} </td>
            {status === 'Shipped' && <td className='text-green-600 font-bold'>{status}</td>}
            {(status !== 'Shipped' && paid) && <td className='text-yellow-600 font-bold'>Pending Shipping</td>}
            {(status !== 'Shipped' && !paid) && <td className='text-red-500 font-bold'>Not Paid</td>}

            {
                status !== "Shipped" && <td>
                    <div className="dropdown dropdown-left">
                        <label tabIndex="0"><button><AiFillHourglass className='App-logo ml-5 pointer-events-auto text-xl bg-[#fdb91c]' /></button></label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {!paid &&
                                <li className="text-error font-semibold"><span onClick={handleCancelOrder}><MdCancel></MdCancel> Cancel Order</span></li>
                            }
                            {paid &&
                                <li className="text-green-500 font-semibold"><span onClick={handleShipOrder}><GiCommercialAirplane />Ship Order</span></li>
                            }
                        </ul>
                    </div>
                </td>
            }
        </tr>
    );
};

export default ManageAllOrderRows;