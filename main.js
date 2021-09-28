import express from "express";
import { db } from "./db-setup.js";

import { PORT } from "./constants.js";

const app = express();

app.use(express.json());

app.all("/", function (request, response) {
    response.type("txt");

    const helpText = `Halo!

Endpoint yang tersedia:
 - GET /menu
 - GET /menu/:kode
 - POST /menu
 - PUT /menu/:kode
 - DELETE /menu/:kode
 - GET /karyawan
 - GET /karyawan/:kode
 - POST /karyawan
 - PUT /karyawan/:kode
 - DELETE /karyawan/:kode`;

    response.send(helpText);
});

(await import("./functions/index.js")).default(app, db);

// Start the web server
app.listen(PORT, function () {
    console.log(`Buka http://localhost:${PORT}`);
});
