import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [myProfile, setMyProfile] = useState([]);
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        if (user) {
            fetch(`https://bd-car-parts-server-jm-12-production.up.railway.app/profile?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setMyProfile(data))
        }
    }, [user])

    const onSubmit = (data, event) => {
        // console.log(data)
        const profile = {
            education: data.education,
            linkedin: data.linkedin,
            location: data.location,
            phone: data.phone,
            email: user.email
        }
        const url = `https://bd-car-parts-server-jm-12-production.up.railway.app/profile/${user?.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(posted => {
                console.log('profile', posted);
            });
        event.target.reset();
    };

    return (
        <div>
            <h2 className='text-green-600 text-center font-bold my-3 text-4xl'>Profile</h2>
            <div className="h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className='flex justify-center'>
                    <div className="card-body">
                        <h1 className='text-green-600 text-center my-2 font-bold'>My Self</h1>
                        <h2 className=''>Name: <span className='text-bold text-xl'>{user?.displayName}</span></h2>

                        {
                            myProfile?.map(mp => <div key={mp._id}>
                                <h2 className=''>Education: <span className='text-bold text-xl'>{mp?.education}</span></h2>
                                <h2 className=''>Location: <span className='text-bold text-xl'>{mp?.location}</span></h2>
                                <h2 className=''>Phone: <span className='text-bold text-xl'>{mp?.phone}</span></h2>
                                <h2 className=''>Linkedin Id: <span className='text-bold text-xl'>{mp?.linkedin}</span></h2>
                            </div>)
                        }

                        <h2 className=''>Email: {user?.email}</h2>
                    </div>
                </div>
                <div className='flex justify-center items-center my-4'>
                    <div className="card-body">
                    <h1 className='text-green-600 text-center my-2 font-bold'>Update Your Profile</h1>
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
                            <input className='btn btn-secondary w-full max-w-xs text-white' type="submit" value="Update Your Profile" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;