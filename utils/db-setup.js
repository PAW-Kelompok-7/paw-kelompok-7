import sqlite3 from "sqlite3";
import { JABATAN } from "./constants.js";

const sqlite = sqlite3.verbose();

const db = new sqlite.Database("./restoran.db");

db.serialize(
    function () {
        db.run(`CREATE TABLE IF NOT EXISTS menu (
            kode            INTEGER         PRIMARY KEY,
            nama            VARCHAR(255)    NOT NULL,
            harga_rp        INT             NOT NULL
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS jabatan (
            kode            INTEGER         PRIMARY KEY,
            nama            VARCHAR(255)    NOT NULL
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS karyawan (
            id              INTEGER         PRIMARY KEY,
            nama            VARCHAR(255)    NOT NULL,
            tahun_masuk     INT UNSIGNED    NOT NULL,
            jabatan         VARCHAR(50)     NOT NULL,
            FOREIGN KEY (jabatan) REFERENCES jabatan(nama)
        )`);

        db.run(`INSERT INTO jabatan (nama) VALUES ${JABATAN.map((nama) => `("${nama}")`).join(", ")}`);
    }
);

export { db };
