import {useState, useEffect} from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const DaftarMenu = () => {

    const[menu, setMenu] = useState([]);

    useEffect(() => {
        getMenu();
    }, [])
    const getMenu = async() =>{
        // const response = await axios.get('http://localhost:3000/menu');
        const response = await fetch('/api/menu').then(rawResults => rawResults.json());
        // console.log

        setMenu(response);
    }
    return (
        <div>
            <Link to ="/add" className ="button is-primary mt-5"> Add New </Link>
            <table className= "table is-striped is-fullwidth"> 
                <thead>
                    <tr>
                        <th>Kode</th>
                        <th>Nama Produk</th>
                        <th>Harga</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {menu?.map((menu, kode) =>(
                        <tr key = {menu.kode}>
                        <td>{menu.kode}</td>
                        <td>{menu.nama}</td>
                        <td>{menu.harga_rp}</td>
                        <td>
                            <button className="button is-small is-info">Edit</button>
                            <button className="button is-small is-danger">Delete</button>
                        </td>
                    </tr> 
                    ))}   
                </tbody>
            </table>
        </div>
    )
}

export default DaftarMenu
