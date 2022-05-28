import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1Zo5LMB8CRBmaRDGWzRCHTkLcyXNhenNrYqhyLpTMIlzY8jOXUOeBBvlAFW8VcEB1jBQ2Cn9agdfUc5jzjgWQ1009iLdOaBx');

const Payment = () => {
    const { id } = useParams();

    const url = `http://localhost:5000/orders/${id}`;
    const { data: order, isLoading } = useQuery('orders', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-accent shadow-xl my-12">
                <div className="card-body">
                    <p className="text-2xl text-center text-green-500 font-bold">Hello, {order?.name}</p>
                    <h2 className="card-title text-white">Please, pay for <span className='text-orange-500'>{order?.items}</span></h2>
                    <p className="text-white">Quantity:  <span className='text-orange-500'>{order?.quantity} P</span></p>
                    <p className='text-white'>Please pay $ <span className='text-orange-500'>{order?.price}</span></p>
                    <p className='flex'><FaCcMastercard className='text-4xl text-white' /> <FaCcPaypal className='mx-3 text-4xl text-white' /> <FaCcVisa className='text-4xl text-white' /></p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body bg-accent">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;