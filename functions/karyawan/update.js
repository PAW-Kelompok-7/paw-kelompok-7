/**
 *  @param {import("express").Express} app 
 *  @param {import("sqlite3").Database} db
 */

export default function (app, db) {
    app.put("/karyawan", function (request, response) {
        const { id, nama, tahun_masuk, jabatan } = request.body;

        db.run('update entities set (id, nama, tahun_masuk, jabatan) VALUES (?, ?, ?, ?)', [id, nama, tahun_masuk, jabatan], function(err) 
        {
            if (err) {
             logger.winston.error("Error updating");
            } else {
             res.status(200).json({ status: 'success', message: 'Updated' });
            }
        });
    }
    )}