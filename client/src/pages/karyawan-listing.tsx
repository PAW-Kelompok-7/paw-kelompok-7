import { useEffect, useState } from "react";

import { useSetPageTitle } from "../utils/page-title-context";

import type { Karyawan } from "../types/karyawan";

export function KaryawanListingPage() {
    useSetPageTitle("Daftar Karyawan");

    const [data, setData] = useState<Karyawan[]>();

    async function fetchData() {
        const response = await fetch("http://localhost:3001/api/karyawan");
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const resultingData = await response.json();
        // return resultingData;
        setData(resultingData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    // useEffect(fetchData, []);

    return (
        <>
            <table className="bordered-table border-separate">
                <thead>
                    <tr>
                        <th>Kode</th>
                        <th>Nama Karyawan</th>
                        <th>Tahun Masuk</th>
                        <th>Jabatan</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(({ id, nama, tahun_masuk, jabatan }) => (
                        <tr>
                            <td>{id}</td>
                            <td>{nama}</td>
                            <td>{tahun_masuk}</td>
                            <td>{jabatan}</td>
                            <td>nulle?</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}