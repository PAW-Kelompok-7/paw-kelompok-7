/**
 *  @param {import("express").Express} app 
 *  @param {import("sqlite3").Database} db
 */
export default function (app, db) {
    app.get("/menu", function (request, response) {
        db.all("SELECT * FROM menu", function (err, result) {
            if (err) {
                response.status(500).end();
                return;
            }

            response.status(200).json(result);
        });
    });

    app.get("/menu/:kode", function (request, response) {
        const { kode } = request.params;

        db.all("SELECT * FROM menu WHERE kode=? LIMIT 1", kode, function (err, result) {
            if (err) {
                response.status(500).end();
                return;
            }

            if (result.length === 0) {
                response.status(404).end();
                return;
            }

            response.status(200).json(result[0]);
        });
    })
}
