//const ExplorerController = require("../lib/services/ExplorerController");

const express = require("express");
const app = express();
app.use(express.json());

const DEFAULT_PORT = 3000;

app.get("/", (req, res) => {
    res.json({message: "Fizzbuzz Api Welcome"});
    res.status(200);
});


app.listen(DEFAULT_PORT, () => {
    console.log(`Fizzbuzz running at port ${DEFAULT_PORT}`);
});

module.exports = app;