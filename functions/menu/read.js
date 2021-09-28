/**
 *  @param {import("express").Express} app 
 *  @param {import("sqlite3").Database} db
 */

export default function (app, db) {
    app.get("/menu", function (request, response) {
        db.all("SELECT * FROM menu", function (err, result) {
            if (err) {
                response.status(400).end();
                return;
            }

            response.status(200).json(result);
        });
    });

    app.get("/menu/:nomor", function (request, response) {
        const { nomor } = request.params;

        db.all("SELECT * FROM menu WHERE nomor=?", nomor, function (err, result) {
            if (err) {
                response.status(400).end();
                return;
            }

            response.status(200).json(result);
        });
    })
}
