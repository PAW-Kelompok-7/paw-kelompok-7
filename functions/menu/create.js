/**
 *  @param {import("express").Express} app 
 *  @param {import("sqlite3").Database} db
 */

export default function (app, db) {
    app.post("/menu", function (request, response) {
        const { nama, harga_rp } = request.body;

        db.run("INSERT INTO menu (nama, harga_rp) VALUES (?, ?)", [nama, harga_rp], function (err, result) {
            const statusCode = err ? 400 : 200;
            response.status(statusCode).end();
        });
    });
}
