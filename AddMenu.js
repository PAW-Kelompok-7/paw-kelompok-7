import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddMenu = () => {
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const navigate = useNavigate();
    

    const saveMenu = async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:3000/menu',{
            nama : nama,
            harga_rp : harga
        });
        navigate('http://localhost:3000');      
    }
    return (
        <div>
            <form onSubmit={saveMenu}>
                <div className='field'>
                    <label className='label'>Nama Produk</label>
                    <input 
                        className='input' 
                        type='text' 
                        placeholder = 'Nama Produk'
                        value = {nama}
                        onChange = {(e) => setNama(e.target.value)} />
                </div>

                <div className='field'>
                    <label className='label'>Harga</label>
                    <input 
                        className='input' 
                        type='text' 
                        placeholder = 'Harga'
                        value = {harga}
                        onChange = {(e) => setHarga(e.target.value)} />
                </div>

                <div className='field'>
                    <button className='button is-primary'>Save</button>
                </div>
            </form>

        </div>
    )
}

export default AddMenu
