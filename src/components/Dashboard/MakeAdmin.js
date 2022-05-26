import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MakeAdmin = () => {
    const {data: users, isLoading, reFetch} = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));

    if(isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>Make admin...........{users.length}</h1>
        </div>
    );
};

export default MakeAdmin;