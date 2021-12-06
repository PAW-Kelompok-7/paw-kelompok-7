import { router, db } from "../index.js";

    router.put("/menu/:kode", function (request, response) {
        const { kode } = request.params;
        const { nama, harga_rp } = request.body;

        db.run("UPDATE menu SET nama=?, harga_rp=? WHERE kode=?", [nama, harga_rp, kode], function (err) {
            if (err) {
                console.error(err);
                response.status(500).end();
                return;
            }

            response.end();
        });
    });
