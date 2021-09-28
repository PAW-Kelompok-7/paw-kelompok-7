import express from "express";

import { db } from "./utils/db-setup.js";
import { PORT } from "./utils/constants.js";

import endpointHandlers from "./functions/index.js";

const app = express();

app.use(express.json());

app.all("/", function (request, response) {
    const helpText = `Halo!

Endpoint yang tersedia:
 - GET /menu
 - GET /menu/:kode
 - POST /menu
 - PUT /menu/:kode
 - DELETE /menu/:kode
 - GET /karyawan
 - GET /karyawan/:id
 - POST /karyawan
 - PUT /karyawan/:id
 - DELETE /karyawan/:id`;

    response.type("txt").send(helpText);
});

await endpointHandlers(app, db);

// Start the web server
app.listen(PORT, function () {
    console.log(`Buka http://localhost:${PORT}`);
});
