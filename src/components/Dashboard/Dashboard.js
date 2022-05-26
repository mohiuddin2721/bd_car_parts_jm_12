import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar-dashboard" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-2xl text-secondary font-bold my-4 text-center'>Welcome To Your Dashboard</h1>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar-dashboard" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-54 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link className='font-bold' to='/dashboard'>My Orders</Link></li>
                    <li><Link className='font-bold' to='/dashboard/addReview'>Add A Review</Link></li>
                    <li><Link className='font-bold' to='/dashboard/myProfile'>My Profile</Link></li>
                    <li><Link className='font-bold' to='/dashboard/manageOrders'>Manage orders</Link></li>
                    <li><Link className='font-bold' to='/dashboard/addProduct'>Add Product</Link></li>
                    {admin && <li><Link className='font-bold' to='/dashboard/makeAdmin'>Make Admin</Link></li>}
                    <li><Link className='font-bold' to='/dashboard/manageItems'>Manage Items</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;