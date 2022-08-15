import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaRunning } from 'react-icons/fa';
import { Link, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const { pathname } = useLocation();
    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar-dashboard" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-2xl text-secondary font-bold my-4 text-center'>Welcome To Your Dashboard</h1>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar-dashboard" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto sm:w-52 w-1/2 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link
                            to='/dashboard'
                            className='font-bold'
                        >
                            My Orders<span className={`font-bold text-white ${pathname.includes('/dashboard/myProfile') && 'text-[#fff] block text-xl'}`}><FaRunning></FaRunning></span>
                        </Link>
                    </li>
                    {
                        !admin && <li>
                            <Link to='/dashboard/addReview'
                                className={`font-bold ${pathname.includes('/dashboard/addReview') && 'bg-[#fdb91c]'}`}
                            >
                                Add A Review<span className={`font-bold text-white ${pathname.includes('/dashboard/myProfile') && 'text-[#fff] block text-xl'}`}><FaRunning></FaRunning></span>
                            </Link>
                        </li>
                    }
                    <li>
                        <Link
                            to='/dashboard/myProfile'
                            className={`font-bold ${pathname.includes('/dashboard/myProfile') && 'bg-[#fdb91c]'}`}
                        >
                            My Profile<span className={`font-bold text-white ${pathname.includes('/dashboard/myProfile') && 'text-[#fff] block text-xl'}`}><FaRunning></FaRunning></span>
                        </Link>
                    </li>
                    {
                        admin && <li>
                            <Link to='/dashboard/manageOrders'
                                className={`font-bold ${pathname.includes('/dashboard/manageOrders') && 'bg-[#fdb91c]'}`}
                            >
                                Manage orders<span className={`font-bold text-white ${pathname.includes('/dashboard/myProfile') && 'text-[#fff] block text-xl'}`}><FaRunning></FaRunning></span>
                            </Link>
                        </li>
                    }
                    {
                        admin && <li>
                            <Link to='/dashboard/addProduct'
                                className={`font-bold ${pathname.includes('/dashboard/addProduct') && 'bg-[#fdb91c]'}`}
                            >
                                Add Product<span className={`font-bold text-white ${pathname.includes('/dashboard/myProfile') && 'text-[#fff] block text-xl'}`}><FaRunning></FaRunning></span>
                            </Link>
                        </li>
                    }
                    {
                        admin && <li>
                            <Link to='/dashboard/makeAdmin'
                                className={`font-bold ${pathname.includes('/dashboard/makeAdmin') && 'bg-[#fdb91c]'}`}
                            >
                                Make Admin<span className={`font-bold text-white ${pathname.includes('/dashboard/myProfile') && 'text-[#fff] block text-xl'}`}><FaRunning></FaRunning></span>
                            </Link>
                        </li>
                    }
                    {
                        admin && <li>
                            <Link to='/dashboard/manageItems'
                                className={`font-bold ${pathname.includes('/dashboard/manageItems') && 'bg-[#fdb91c]'}`}
                            >
                                Manage Items<span className={`font-bold text-white ${pathname.includes('/dashboard/myProfile') && 'text-[#fff] block text-xl'}`}><FaRunning></FaRunning></span>
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;