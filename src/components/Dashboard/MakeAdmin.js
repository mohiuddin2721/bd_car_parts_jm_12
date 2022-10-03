import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://cryptic-tor-43534.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='section-title m-2 font-semibold'>Total Users:-{users?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Users</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <MakeAdminRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></MakeAdminRow>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Users</th>
                            <th>Admin</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;