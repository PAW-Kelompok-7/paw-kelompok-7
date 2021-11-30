import { router, db } from "../index.js";

import { JABATAN } from "../../utils/constants.js";

router.post("/karyawan", function (request, response) {
    const { nama, tahun_masuk, jabatan } = request.body;

    if (!JABATAN.includes(jabatan)) {
        response
            .status(400)
            .type("txt")
            .send(`Jabatan tidak memenuhi. Jabatan-jabatan yang memungkinkan: ${JABATAN.join(", ")}`)
            .end();
        return;
    }

    const currentYear = new Date().getFullYear();

    if (tahun_masuk < 1900 || tahun_masuk > currentYear) {
        response
            .status(400)
            .send("Tahun masuk di luar batas.")
            .end();
        return;
    }

    db.run("INSERT INTO karyawan (nama, tahun_masuk, jabatan) VALUES (?, ?, ?)", [
        nama,
        tahun_masuk ?? currentYear,
        jabatan
    ], function (err) {
        if (err) {
            console.error(err);
            response.status(500).end();
            return;
        }

        response.status(201).end();
    });
});
