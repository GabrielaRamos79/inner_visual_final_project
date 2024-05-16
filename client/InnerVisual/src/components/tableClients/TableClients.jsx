import './tableClients.css'
import {UserHandler} from '../../handler/UserHandler'
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
        <h2 className='titleClient'>Lista de clientes</h2>
            <section className='sectionForm'>
            <table id="myTable">
                <thead>
                    <tr>
                        <th className='thTable'>ID</th>
                        <th className='thTable'>Name</th>
                        <th className='thTable'>Surname</th>
                        <th className='thTable'>Email</th>
                        <th className='thTable'>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users) => (
                        <tr className='trTable' key={users.id_user}>
                            <td className='tdTable'>{users.id_user}</td>
                            <td className='tdTable'>{users.name}</td>
                            <td className='tdTable'>{users.surname}</td>
                            <td className='tdTable'>{users.email}</td>
                            <td className='tdTable'>{users.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </section>
        </>
    )
}

export default TableClients
