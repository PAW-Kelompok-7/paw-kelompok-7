// import { JABATAN } from "../../../server/src/utils/constants";

// const Jabatan = [...JABATAN] as const;

export interface Karyawan {
    id?: number;
    nama: string;
    tahun_masuk: number;
    // jabatan: typeof Jabatan[number]
    jabatan: "manajer" | "pelayan" | "chef"; // FIXME: Unnecessary duplication
}