import React from 'react';
import { RiAdminLine } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { toast } from 'react-toastify';


const MakeAdminRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://cryptic-tor-43534.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403) {
                    toast.error('Failed to an admin, You are not admin')
                }
                return res.json()})
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin');
                }
            })
    }

    const makeUser = () => {
        fetch(`https://bd-car-parts-server-jm-12-production.up.railway.app/user/adminToUser/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403) {
                    toast.error('Failed to an admin, You are not admin')
                }
                return res.json()})
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an user from admin');
                }
            })
    }

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs btn-success">Make Admin  <RiAdminLine className='text-white text-sm' /></button>}</td>
            <td>{role === 'admin' && <button onClick={makeUser} className="btn btn-xs btn-secondary">Make User  <RiAdminLine className='text-white text-sm' /></button>}</td>
        </tr>
    );
};

export default MakeAdminRow;