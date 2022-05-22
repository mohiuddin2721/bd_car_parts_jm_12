import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className='font-bold'>HOME</a></li>
                        <li><a className='font-bold'>BLOG</a></li>
                        <li><a className='font-bold'>ABOUT</a></li>
                        <li><a className='font-bold'>MY PORTFOLIO</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">BD-CAR-PARTS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a className='font-bold'>HOME</a></li>
                    <li><a className='font-bold'>BLOG</a></li>
                    <li><a className='font-bold'>ABOUT</a></li>
                    <li><a className='font-bold'>MY PORTFOLIO</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;