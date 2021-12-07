import { router, db } from "../index.js";

    router.delete("/menu/:kode", function (request, response) {
        const { kode } = request.params;

        db.run("DELETE FROM menu WHERE kode=?", kode, function (err) {
            if (err) {
                console.error(err);
                response.status(500).end();
                return;
            }

            response.end();
        })
    });
