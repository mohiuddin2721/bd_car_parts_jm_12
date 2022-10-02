import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineDashboard } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from './CustomLink';
import './Navbar.css';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/');
    };

    return (
        <div className="navbar bg-primary h-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost btn-circle sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home' className='font-bold'>HOME</Link></li>
                        <li><Link to='/blog' className='font-bold'>BLOG</Link></li>
                        <li><Link to='/myPortfolio' className='font-bold'>PORTFOLIO</Link></li>
                        {
                            user && <li>
                                <Link
                                    to='/dashboard'
                                    className='font-bold'
                                >
                                    DASHBOARD
                                </Link>
                            </li>
                        }
                        <li className='border'>{user ? <button onClick={logout} className="btn font-bold btn-ghost">Sign Out</button> : <Link to='/signIn' className='font-bold'>SIGN IN</Link>}</li>
                        {
                            user &&
                            <>
                                <li className='font-bold'>{user?.displayName}</li>
                            </>
                        }
                    </ul>
                </div>
                <><Link to='/home' className="btn btn-ghost normal-case text-xl">BCParts</Link></>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal">
                    <li>
                        <CustomLink
                            to='/home'
                            className='font-bold'
                        // className={`font-bold ${pathname.includes('home') && 'border-white my-border'}`}
                        >
                            HOME
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink
                            to='/blog'
                            className='font-bold'
                        // className={`font-bold ${pathname.includes('blog') && ' border-white my-border'}`}
                        >
                            BLOG
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink
                            to='/myPortfolio'
                            className='font-bold'
                        // className={`font-bold ${pathname.includes('myPortfolio') && ' border-white my-border'}`}
                        >
                            PORTFOLIO
                        </CustomLink>
                    </li>
                    {
                        user && <li>
                            <CustomLink
                                to='/dashboard'
                                className='font-bold'
                            >
                                DASHBOARD
                            </CustomLink>
                            {/* <Link to='/dashboard'
                                className={`font-bold ${pathname.includes('dashboard') && 'border-2 border-white my-border'}`}
                            >
                                DASHBOARD
                            </Link> */}
                        </li>
                    }
                    <li>{user ? <button onClick={logout} className="btn font-bold btn-ghost">Sign Out</button> : <CustomLink to='/signIn' className='font-bold'>SIGN IN</CustomLink>}</li>
                    {
                        user &&
                        <>
                            <li className='text-xs items-center pl-1 text-white'>{user?.displayName}</li>
                            <li><img style={{ 'borderRadius': '50%', 'maxHeight': '50px' }} src={user?.photoURL} alt="" /></li>
                        </>
                    }
                </ul>
            </div>
            {
                (pathname.includes('dashboard'))
                &&
                <div className='sm:hidden navbar-end'>
                    <label tabIndex="1" htmlFor="sidebar-dashboard" className="btn btn-ghost btn-circle">
                        <AiOutlineDashboard className='text-3xl' />
                        <span className='text-xs'>Dash</span>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg> */}
                    </label>
                </div>
            }
        </div>
    );
};

export default Navbar;