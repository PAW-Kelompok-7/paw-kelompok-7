import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.db");

db.serialize(
    function () {
        db.run(`CREATE TABLE IF NOT EXISTS menu (
            nomor INTEGER PRIMARY KEY,
            nama VARCHAR(255) NOT NULL,
            harga_rp INT NOT NULL
        )`);
    },
    function () {
        db.run(`CREATE TABLE IF NOT EXISTS jabatan_karyawan (
            index INTEGER PRIMARY KEY,
            nama_jabatan VARCHAR(255) NOT NULL
        )`);
    },
    function () {
        db.run(`INSERT INTO jabatan_karyawan (
            nama_jabatan
        ) VALUES (
            "manajer",
            "pelayan",
            "chef"
        )`);
    },
    function () {
        db.run(`CREATE TABLE IF NOT EXISTS karyawan (
            id INTEGER PRIMARY KEY,
            nama VARCHAR(255) NOT NULL,
            tahun_masuk INT UNSIGNED NOT NULL,
            jabatan VARCHAR(50) NOT NULL,
            FOREIGN KEY (jabatan) REFERENCES jabatan_karyawan(nama_jabatan)
        )`);
    },
);

export { db };
