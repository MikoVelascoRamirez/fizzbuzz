const ExplorerController = require("../lib/services/ExplorerController");

const express = require("express");
const app = express();
app.use(express.json());

const DEFAULT_PORT = 3000;

app.get("/", (req, res) => {
    res.json({message: "Fizzbuzz Api Welcome"});
    res.status(200);
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersMission = ExplorerController.getExplorersByMission(mission);
    res.json({"explorers": explorersMission});
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const getAmountOfExplorers = ExplorerController.getExplorersAmonutByMission(mission);
    res.json({"mission": mission, "quantity": getAmountOfExplorers});
});

app.listen(DEFAULT_PORT, () => {
    console.log(`Fizzbuzz running at port ${DEFAULT_PORT}`);
});

module.exports = app;