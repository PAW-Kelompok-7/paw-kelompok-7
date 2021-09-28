/**
 *  @param {import("express").Express} app 
 *  @param {import("sqlite3").Database} db
 */
export default function (app, db) {
    app.get("/karyawan", function (request, response) {
        db.all("SELECT * FROM karyawan", function (err, result) {
            if (err) {
                response.status(500).end();
                return;
            }

            response.status(200).json(result);
        });
    });

    app.get("/karyawan/:id", function (request, response) {
        const { id } = request.params;

        db.all("SELECT * FROM karyawan WHERE id=?", id, function (err, result) {
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

