import express, { json, static as serveStaticFiles } from "express";
import cors from "cors";

import { router } from "./functions/index.js";

const app = express();

app.use(json());
app.use(cors());

// if (process.env.NODE_ENV === "production") {
    app.use(serveStaticFiles("client/build"));
// }

app.use("/api", router);

// Determine the web server port from the dev/prod status
const port = process.env.NODE_ENV === "production" ? 3000 : 3001;

// Start the web server
app.listen(port, function () {
    console.log(`Buka http://localhost:${port}`);
});
