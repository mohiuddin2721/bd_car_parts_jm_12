import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data, event) => {
        // console.log(data)
        const profile = {
            education: data.education,
            linkedin: data.linkedin,
            location: data.location,
            phone: data.phone,
            email: user.email
        }
        const url = `http://localhost:5000/profile`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(posted => {
                // console.log('profile', posted);
            });
            event.target.reset();
    };

    return (
        <div className="card w-96 mx-auto bg-neutral text-neutral-content">
            <h1 className='text-center my-2'>MYSELF</h1>
            <h2 className='text-white text-center'>{user?.displayName}</h2>
            <h2 className='text-white text-center'>{user?.email}</h2>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Education"
                            className="input input-bordered w-full max-w-xs text-black"
                            {...register("education", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.education?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Your location"
                            className="input input-bordered w-full max-w-xs text-black"
                            {...register("location", {
                                required: {
                                    value: true,
                                    message: 'location is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.location?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="number"
                            placeholder="Your phone number"
                            className="input input-bordered w-full max-w-xs text-black"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'phone is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.phone?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Your Linkedin Link"
                            className="input input-bordered w-full max-w-xs text-black"
                            {...register("linkedin", {
                                required: {
                                    value: true,
                                    message: 'Linkedin Link is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.linkedin?.message}</span>}
                        </label>
                    </div>
                    <input className='btn btn-secondary w-full max-w-xs text-white' type="submit" value="SUBMIT" />
                    <label className="label">
                        <span className="label-text text-white">Already have a profile? You can update</span>
                    </label>
                    <input className='btn btn-secondary w-full max-w-xs text-white' type="submit" value="UPDATE" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;