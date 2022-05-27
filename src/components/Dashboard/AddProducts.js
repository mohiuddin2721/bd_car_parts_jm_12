import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imgStorKey = 'c016290e08f02d9e406bf3ce2e202309';


    const onSubmit = (data, event) => {
        // console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('imgBBB', result);
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        orderQuantity: data.orderQuantity,
                        availableQuantity: data.availableQuantity,
                        image: img
                    }
                    // now send review to database 
                    fetch('http://localhost:5000/parts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(posted => {
                            console.log('product', posted);
                        })
                }
            })
    };

    return (
        <div className='ml-4'>
            <h1 className='text-2xl text-green-500 font-bold text-center my-2'>Add Products</h1>
            <div className='grid justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name: </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Product name is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Product Description"
                            className="input input-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.description?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input
                            type="number"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is required'
                                }
                            })}
                            placeholder="Price"
                            className="input input-bordered"
                        />
                        <label className="label">
                            {errors?.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.price?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Order</span>
                        </label>
                        <input
                            type="number"
                            {...register("orderQuantity", {
                                required: {
                                    value: true,
                                    message: 'Minimum Order is required'
                                }
                            })}
                            placeholder="Minimum Order"
                            className="input input-bordered"
                        />
                        <label className="label">
                            {errors?.orderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.orderQuantity?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input
                            type="number"
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: 'Available Quantity is required'
                                }
                            })}
                            placeholder="Available Quantity"
                            className="input input-bordered"
                        />
                        <label className="label">
                            {errors?.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.availableQuantity?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Image</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.image?.message}</span>}
                        </label>
                    </div>

                    <input className='btn w-full max-w-xs text-white' type="submit" value="Add The Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;