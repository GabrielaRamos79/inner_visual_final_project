import './tableClients.css'
import { UserHandler } from '../../handler/UserHandler'
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
            <section className='tableSection'>
                <h2 className='titleClient'>Alumnos</h2>
                <section className='sectionForm'>
                    <table id="myTable">
                        <thead>
                            <tr>
                                <th className='thTable'>ID usuario</th>
                                <th className='thTable'>Nombre</th>
                                <th className='thTable'>Apellidos</th>
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
            </section>
        </>
    )
}

export default TableClients
