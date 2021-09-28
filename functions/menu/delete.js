/**
 *  @param {import("express").Express} app 
 *  @param {import("sqlite3").Database} db
 */
export default function (app, db) {
    app.delete("/menu/:kode", function (request, response) {
        const { kode } = request.params;

        db.run("DELETE FROM menu WHERE kode=?", kode, function (err) {
            const statusCode = err ? 500 : 200;
            response.status(statusCode).end();
        })
    });
}
