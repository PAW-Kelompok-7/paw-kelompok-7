import express from "express";

const app = express();

app.get("/", function (request, response) {
    response.send("Halo, dunia!");
});

// Start the web server
const PORT = 3000;
app.listen(PORT, function () {
    console.log(`Buka http://localhost:${PORT}`);
});
