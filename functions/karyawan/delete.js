import { router, db } from "../index.js";

    router.delete("/karyawan/:id", function (request, response) {
        const { id } = request.params;

        db.run("DELETE FROM karyawan WHERE id=?", id, function(err) {
            if (err) {
                console.error(err);
                response.status(500).end();
                return;
            }
            
            response.end();
        });
    });
