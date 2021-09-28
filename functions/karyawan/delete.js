/**
 *  @param {import("express").Express} app 
 *  @param {import("sqlite3").Database} db
 */

export default function (app, db) {
    app.delete("/karyawan/:id", function (request, response) {
        const { id, nama, tahun_masuk, jabatan } = request.body;

        db.run('DELETE FROM karyawan WHERE id = ' + req.params.id, karyawan, function(err, result){
            if (err) {
                req.flash('error', err)
            } else {
                req.flash('success', 'Karyawan deleted successfully! id = ' + req.params.id)
            }
        });
    });
    });
}
