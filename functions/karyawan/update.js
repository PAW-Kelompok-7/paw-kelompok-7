/**
 *  @param {import("express").Express} app 
 *  @param {import("sqlite3").Database} db
 */
export default function (app, db) {
    app.put("/karyawan/:kode", function (request, response) {
        const { nama, tahun_masuk, jabatan } = request.body;
        const { kode } = request.params;

        db.run('UPDATE karyawan SET nama=?, tahun_masuk=?, jabatan=? WHERE kode=?', [nama, tahun_masuk, jabatan, kode], function(err) {
            const statusCode = err ? 500 : 200;
            response.status(statusCode).end();
        });
    });
}