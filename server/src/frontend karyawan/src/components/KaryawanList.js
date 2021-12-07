import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"; 

const KaryawanList = () => {
    const [karyawan, setKaryawan] = useState([]);

    useEffect(() => {
        getKaryawan();
    }, []);

    // untuk fetching data dari API
    const getKaryawan = async () => {
        const response = await axios.get('http://localhost:3000/karyawan');
        setKaryawan(response.data);
    }

    const deleteKaryawan = async (id) =>{
        await axios.delete(`http://localhost:3000/karyawan/${id}`)
        getKaryawan();
    }

    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Jabatan</th>
                        <th>Tahun Masuk</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        karyawan.map((employee, id) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.nama}</td>
                                <td>{employee.jabatan}</td>
                                <td>{employee.tahun_masuk}</td>
                                <td>
                                    <Link to={`/edit/${employee.id}`} className="button is-small is-info">Edit</Link>
                                    <button onClick={() => deleteKaryawan(employee.id)}className="button is-small is-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default KaryawanList
