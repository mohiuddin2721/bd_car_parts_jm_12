import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [item, setItem] = useState();
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    // console.log(user.email);

    useEffect(() => {
        const url = `https://bd-car-parts-server-jm-12-production.up.railway.app/parts/${id}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })

    }, [id])

    const onSubmit = (data, event) => {
        // console.log(data)
        const order = {
            productId: id,
            email: user?.email,
            items: item?.name,
            price: item?.price * data.quantity,
            name: data.name,
            number: data.number,
            address: data.address,
            quantity: data.quantity
        }
        const url = 'https://bd-car-parts-server-jm-12-production.up.railway.app/orders';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                alert('Your purchase successful!!!');
                toast.success('Thank you for select us');
                event.target.reset();
            })
    };

    return (
        <div>
            <div className='mx-12'>
                <div className="hero h-auto">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Purchase now!</h1>
                            <figure><img src={item?.image} className='w-60' alt="Shoes" /></figure>
                            <h1 className="text-5xl">{item?.name}</h1>
                            <p>{item?.description}</p>
                            <p>Minimum Order: <span className='font-bold'>{item?.orderQuantity}</span></p>
                            <p>Available Quantity: <span className='font-bold'>{item?.availableQuantity}</span></p>
                            <p>Price: <span className='font-bold'>${item?.price}</span></p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control mb-2">
                                        <input
                                            type="email"
                                            {...register("email")}
                                            value={user?.email}
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control mb-2">
                                        <input
                                            type="text"
                                            {...register("items")}
                                            value={item?.name}
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control mb-2">
                                        <input
                                            type="number"
                                            {...register("price")}
                                            value={item?.price}
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control mb-2">
                                        <input
                                            type="text"
                                            {...register("name", { required: true })}
                                            placeholder="Your Name"
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control mb-2">
                                        <input
                                            type="number"
                                            {...register("number", { required: true })}
                                            placeholder="Your Phone Number"
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control mb-2">
                                        <textarea
                                            type="text"
                                            {...register("address", { required: true })}
                                            placeholder="Your Address"
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control mb-2">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input
                                            type="number"
                                            {...register("quantity", {
                                                max: {
                                                    value: item?.availableQuantity,
                                                    message: `Available items ${item?.availableQuantity}`
                                                },
                                                min: {
                                                    value: item?.orderQuantity,
                                                    message: `Minimum Order ${item?.orderQuantity}`
                                                }
                                            })}
                                            placeholder={`Minimum ${item?.orderQuantity}P`}
                                            required
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <label className="label">
                                        {errors?.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors?.quantity?.message}</span>}
                                        {errors?.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors?.quantity?.message}</span>}
                                    </label>
                                    <div className="form-control">
                                        {
                                            errors?.quantity?.type === 'max' || errors?.quantity?.type === 'min'
                                                ?
                                                <input
                                                    disabled
                                                    type="submit"
                                                    className='btn btn-primary'
                                                    value="Purchase"
                                                />
                                                :
                                                <input
                                                    type="submit"
                                                    className='btn btn-primary'
                                                    value="Purchase"
                                                />
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;