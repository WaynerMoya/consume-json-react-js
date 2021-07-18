
import React, { useEffect, useState } from 'react'

//import other components
import UserList from './UserLIst'
import useHttp from '../../hooks/use-http'

const User = () => {

    const [users, setUsers] = useState([]);

    const getDataUsers = (users) => {
        setUsers(users);
    }

    const { error, isLoading, sendRequest: sendRequestUsers } = useHttp();

    useEffect(() => {
        sendRequestUsers({
            url: 'https://jsonplaceholder.typicode.com/users'
        }, getDataUsers)
    }, []);

    return (
        <>  
            <h2 style={{ marginTop: 20 }}>Users</h2>
            <UserList users={users} />
        </>
    )
}

export default User;