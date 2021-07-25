
import React, { useState } from 'react'
import UsersAnimation from './UserAnimation'

import Input from './../UI/Input'

const UserList = ({ users }) => {

    const [search, setSearch] = useState('');
    let counterAnimation = 0

    const getValueInput = (value) => {
        setSearch(value);
    }

    const filterJSON = (data) => {
        return Object.values(data).filter((item) => {
            return item.name.includes(search);
        })
    }

    let renderedUsers = Object.values(filterJSON(users)).map((item) => {
        return (
            <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
            </tr>
        )
    })

    if (renderedUsers.length == 0) {
        counterAnimation = 1
        renderedUsers = (
            <>
                <h1 style={{textAlign:'center' , marginTop : 20 }}>Users not found</h1>
                < UsersAnimation />
            </>
        )
    }

    return (
        <>
            <Input getValueInput={getValueInput} />

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        {counterAnimation == 1 ? '' : (
                            <>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Website</th>
                            </>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {renderedUsers}
                </tbody>
            </table>
        </>
    )

}

export default UserList;

/*
<div class="mb-3" style={{ marginTop: 30 }}>
                <input
                    type="text"
                    class="form-control"
                    value={search}
                    onChange={({ target: { value } }) => setSearch(value)}
                />
            </div>

*/