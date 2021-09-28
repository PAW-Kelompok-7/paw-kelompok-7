/** @type {Func} */
export default function (app, db) {
    app.put("/karyawan/:id", function (request, response) {
        const { nama, tahun_masuk, jabatan } = request.body;
        const { id } = request.params;

        db.run('UPDATE karyawan SET nama=?, tahun_masuk=?, jabatan=? WHERE id=?', [nama, tahun_masuk, jabatan, id], function(err) {
            if (err) {
                console.error(err);
                response.status(500).end();
                return;
            }

            response.end();
        });
    });
}
