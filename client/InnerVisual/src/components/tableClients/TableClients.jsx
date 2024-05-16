import './tableClients.css'
import {UserHandler} from '../../handler/GetUserHandler'
import React, { useState, useEffect } from 'react';

const TableClients = () => {
    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        const userData = await UserHandler.getUser();
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
                    {users.map((users) => (
                        <tr key={users.id_user}>
                            <td>{users.id_user}</td>
                            <td>{users.name}</td>
                            <td>{users.surname}</td>
                            <td>{users.email}</td>
                            <td>{users.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TableClients
