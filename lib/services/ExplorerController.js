const Reader = require("../utils/Reader");
const ExplorerService = require("./ExplorerService");
//const fizzBuzzValidation = require("./FizzBuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonfile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonfile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonfile("explorers.json");
        return ExplorerService.amountOfExplorers(explorers, mission);
    }
}

module.exports = ExplorerController;