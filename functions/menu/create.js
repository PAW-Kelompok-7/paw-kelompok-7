/** @type {Func} */
export default function (app, db) {
    app.post("/menu", function (request, response) {
        const { nama, harga_rp } = request.body;

        db.run("INSERT INTO menu (nama, harga_rp) VALUES (?, ?)", [nama, harga_rp], function (err) {
            if (err) {
                console.error(err);
                response.status(500).end();
                return;
            }

            response.status(201).end();
        });
    });
}
