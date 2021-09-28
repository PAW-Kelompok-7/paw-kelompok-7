/**
 *  @param {import("express").Express} app 
 *  @param {import("sqlite3").Database} db
 */
export default function (app, db) {
    app.delete("/karyawan/:id", function (request, response) {
        const { id } = request.params;

        db.run("DELETE FROM karyawan WHERE id=?", id, function(err){
            statusCode = err ? 500 : 200;
            response.send(statusCode).end();
        });
    });
}
