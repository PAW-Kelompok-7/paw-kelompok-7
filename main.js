import express from "express";
import { db } from "./db-setup.js";

const app = express();

app.use(express.json());

app.get("/", function (request, response) {
    response.send("Hello");
});

(await import("./functions/index.js")).default(app, db);

// Start the web server
const PORT = 3000;
app.listen(PORT, function () {
    console.log(`Buka http://localhost:${PORT}`);
});
