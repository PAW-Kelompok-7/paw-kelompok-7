import { JABATAN } from "../../constants.js";

/**
 *  @param {import("express").Express} app 
 *  @param {import("sqlite3").Database} db
 */
export default function (app, db) {
    app.post("/karyawan", function (request, response) {
        const { nama, tahun_masuk, jabatan } = request.body;

        if (!JABATAN.includes(jabatan)) {
            response
                .status(400)
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
            const statusCode = err ? 500 : 201;
            response.status(statusCode).end();
        });
    });
}
