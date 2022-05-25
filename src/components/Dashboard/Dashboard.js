import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar-dashboard" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-2xl text-secondary font-bold my-2'>Welcome To Your Dashboard</h1>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar-dashboard" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-54 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;