import { useEffect, useState } from "react";

import { useSetPageTitle } from "../utils/page-title-context";

import type { Karyawan } from "../types/karyawan";
import { EditableCellItem } from "../components/EditableCellItem";


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
    
    if (!data/* || !data.length*/) {
        return <p>Memuat...</p>;
    }

    if (!data.length) {
        return <p>Tidak ada data!</p>;
    }
    
    // console.log(Object.keys(data))
    // console.log(data)
    
    const dataKeys = Object.keys(data[0]);

    function onDeleteHandling(employeeId: number) {
        const userResponse = window.confirm(`Apakah Anda yakin ingin menghapus karyawan dengan ID ${employeeId}?`);
        if (!userResponse) {
            return;
        }
        (async () => {
            await fetch(`http://localhost:3001/api/karyawan/${employeeId}`, {
                method: "DELETE"
            });
            await fetchData();
        })();
    }

    
    return (
        <>
            <table className="bordered-table border-separate">
                <thead>
                    <tr>
                        {/* <th>Kode</th>
                        <th>Nama Karyawan</th>
                        <th>Tahun Masuk</th>
                    <th>Jabatan</th> */}
                        {dataKeys.map((title) => <th>{title}</th>)}
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, dataTitleIndex) => {
                        // const Td: Omit<
                        //     typeof EditableCellItem,
                        //     | "updateUrl"
                        //     | "onUpdatedCallback"
                        //     | "dataTitle"
                        //     | "accompanyingData"
                        // > = ({
                        const Td = ({
                            // updateUrl,
                            // onUpdatedCallback,
                            // dataTitle,
                            // accompanyingData,
                            ...props
                        }: any) => <EditableCellItem updateUrl={`http://localhost:3001/api/karyawan/${item.id}`} onUpdatedCallback={fetchData} accompanyingData={item} {...props} />
                        return (
                            <tr key={item.id}>
                                {/* <Td dataTitle={dataKeys[0]}>{item.id as unknown as string/* HACK * / || "null"}</Td> */}
                                <td>{item.id}</td>
                                <Td dataTitle={dataKeys[1]}>{item.nama}</Td>
                                <Td dataTitle={dataKeys[2]}>{item.tahun_masuk as unknown as string}</Td>
                                <Td dataTitle={dataKeys[3]}>{item.jabatan}</Td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => {onDeleteHandling(item.id!)}}
                                        className="px-2 py-1 button bg-red-600 text-white text-xs hover:bg-red-500"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}