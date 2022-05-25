import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
        navigate('/');
    };

    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home' className='font-bold'>HOME</Link></li>
                        <li><Link to='/blog' className='font-bold'>BLOG</Link></li>
                        <li><Link to='/myPortfolio' className='font-bold'>MY PORTFOLIO</Link></li>
                        {
                            user && <li><Link to='/dashboard' className='font-bold'>DASHBOARD</Link></li>
                        }
                        <li>{user ? <button onClick={logout} className="btn font-bold btn-ghost">Sign Out</button> : <Link to='/signIn' className='font-bold'>SIGN IN</Link>}</li>
                        {
                            user &&
                            <>
                                <li className='font-bold'>{user?.displayName}</li>
                            </>
                        }
                    </ul>
                </div>
                <li><Link to='/' className="btn btn-ghost normal-case text-xl">BD-CAR-PARTS</Link></li>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home' className='font-bold'>HOME</Link></li>
                    <li><Link to='/blog' className='font-bold'>BLOG</Link></li>
                    <li><Link to='/myPortfolio' className='font-bold'>MY PORTFOLIO</Link></li>
                    {
                        user && <li><Link to='/dashboard' className='font-bold'>DASHBOARD</Link></li>
                    }
                    <li>{user ? <button onClick={logout} className="btn font-bold btn-ghost">Sign Out</button> : <Link to='/signIn' className='font-bold'>SIGN IN</Link>}</li>
                    {
                        user &&
                        <>
                            <li className='font-bold items-center pl-1'>{user?.displayName}</li>
                            <li><img style={{ 'borderRadius': '50%', 'maxHeight': '50px' }} src={user?.photoURL} alt="" /></li>
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="sidebar-dashboard" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;