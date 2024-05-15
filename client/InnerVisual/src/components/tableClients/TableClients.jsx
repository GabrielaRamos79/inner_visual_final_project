import './tableClients.css'
import {GetUserHandler} from '../../handler/GetUserHandler'
import React, { useState, useEffect } from 'react';

const TableClients = () => {
    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        const userData = await GetUserHandler.getUser();
        setUsers(userData);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <table id="myTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id_user}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TableClients
