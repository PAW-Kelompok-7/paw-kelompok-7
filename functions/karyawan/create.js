/**
 *  @param {import("express").Express} app 
 *  @param {import("sqlite3").Database} db
 */

export default function (app, db) {
    app.post("/karyawan", function (request, response) {
        const { nama, harga_rp } = request.body;

        db.run("INSERT INTO karyawan (id, nama, tahun_masuk, jabatan) VALUES (?, ?, ?, ?)", [id, nama, tahun_masuk, jabatan], function (err, result) {
            const statusCode = err ? 400 : 200;
            response.status(statusCode).end();
        });
    });
}