/** @type {Func} */
export default function (app, db) {
    app.get("/menu", function (request, response) {
        db.all("SELECT * FROM menu", function (err, result) {
            if (err) {
                console.error(err);
                response.status(500).end();
                return;
            }

            response.json(result);
        });
    });

    app.get("/menu/:kode", function (request, response) {
        const { kode } = request.params;

        db.all("SELECT * FROM menu WHERE kode=? LIMIT 1", kode, function (err, result) {
            if (err) {
                console.error(err);
                response.status(500).end();
                return;
            }

            if (result.length === 0) {
                response.status(404).end();
                return;
            }

            response.json(result[0]);
        });
    })
}
