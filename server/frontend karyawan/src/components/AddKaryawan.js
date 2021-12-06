import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddKaryawan = () => {
    const [id, setID] = useState('');
    const [nama, setNama] = useState('');
    const [jabatan, setJabatan] = useState('');
    const [tahun_masuk, setTahunMasuk] = useState('');
    const history = useHistory();

    const saveKaryawan = async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:3000/karyawan',{
            id: id,
            nama : nama,
            jabatan : jabatan,
            tahun_masuk : tahun_masuk
        });
        history.pushState("/")
    }

    return (
        <div>
            <form onSubmit={saveKaryawan}>
                <div className="field">
                    <label className="label">ID</label>
                    <input 
                        class="input" 
                        type="text" 
                        placeholder="ID"
                        value={id}
                        onChange={ (e) => setID(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label className="label">Nama</label>
                    <input 
                        class="input" 
                        type="text" 
                        placeholder="Nama"
                        value={nama}
                        onChange={ (e) => setNama(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label className="label">Jabatan</label>
                    <input 
                        class="input" 
                        type="text" 
                        placeholder="Jabatan"
                        value={jabatan}
                        onChange={ (e) => setJabatan(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label className="label">Tahun Masuk</label>
                    <input 
                        class="input" 
                        type="text" 
                        placeholder="Tahun Masuk"
                        value={tahun_masuk}
                        onChange={ (e) => setTahunMasuk(e.target.value)}
                    />
                </div>

                <div>
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddKaryawan
