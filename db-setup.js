import sqlite3Stock from "sqlite3";

const sqlite3 = sqlite3Stock.verbose();

const db = new sqlite3.Database("./restoran.db");

db.serialize(
    function () {
        db.run(`CREATE TABLE IF NOT EXISTS menu (
            nomor           INTEGER         PRIMARY KEY,
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

        db.run(`INSERT INTO jabatan (nama) VALUES ("manajer"), ("pelayan"), ("chef")`);
    }
);

export { db };
