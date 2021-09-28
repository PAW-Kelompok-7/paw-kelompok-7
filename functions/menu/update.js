/**
 *  @param {import("express").Express} app 
 *  @param {import("sqlite3").Database} db
 */
export default function (app, db) {
    app.put("/menu/:kode", function (request, response) {
        const { kode } = request.params;
        const { nama, harga_rp } = request.body;

        db.run("UPDATE menu SET nama=?, harga_rp=? WHERE kode=?", [nama, harga_rp, kode], function (err) {
            const statusCode = err ? 500 : 200;
            response.status(statusCode).end();
        });
    });
}
