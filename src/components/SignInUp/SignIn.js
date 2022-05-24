import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let errorMessage;

    if (gLoading || loading) {
        return <Loading></Loading>
    }

    if (gError || error) {
        errorMessage = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }


    const onSubmit = data => {
        // console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div className='flex justify-center items-center h-auto my-4'>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">SIGN IN</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 character or longer'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                            </label>
                        </div>
                        {errorMessage}
                        <input className='btn btn-secondary max-w-xs text-white w-full' type="submit" value='SIGN IN' />
                    </form>

                    <p><small>New to BD Car Parts? <Link className='text-secondary' to='/signUp'>Create new account</Link></small></p>

                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-secondary"
                    >Sigh In With Google</button>

                </div>
            </div>
        </div>
    );
};

export default SignIn;