import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

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
            // console.log('imgBBB', result);
            if(result.success){
                const img= result.data.url;
                const review = {
                    name: data.name,
                    comment: data.comment,
                    ratting: data.ratting,
                    image: img
                }
                // now send review to database 
                fetch('https://bd-car-parts-server-jm-12-production.up.railway.app/reviews', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(review)
                })
                .then(res => res.json())
                .then(posted => {
                    console.log('review', posted);
                    toast.success('Thank you for your good review')
                    event.target.reset();
                })
            }
        })
    };

    return (
        <div className='ml-4'>
            <h1 className='text-2xl text-green-500 font-bold text-center my-2'>Please add your valuable review</h1>
            <div className='grid justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Comment</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Your Valuable Review"
                            className="input input-bordered w-full max-w-xs"
                            {...register("comment", {
                                required: {
                                    value: true,
                                    message: 'Please, Put your valuable review'
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.comment?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.comment?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                        <input
                            type="number"
                            {...register("ratting", {
                                required: {
                                    value: true,
                                    message: 'Please, give your valuable ratting'
                                },
                                max: {
                                    value: 5,
                                    message: 'Ratting must be 1 to 5'
                                },
                                min: {
                                    value: 1,
                                    message: 'Ratting must be 1 to 5'
                                }
                            })}
                            placeholder='Give your ratting'
                            
                            className="input input-bordered"
                        />
                        <label className="label">
                            {errors?.ratting?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.ratting?.message}</span>}
                            {errors?.ratting?.type === 'max' && <span className="label-text-alt text-red-500">{errors?.ratting?.message}</span>}
                            {errors?.ratting?.type === 'min' && <span className="label-text-alt text-red-500">{errors?.ratting?.message}</span>}
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
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>

                    <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;