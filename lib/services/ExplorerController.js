const Reader = require ("../utils/Reader"),
    ExplorerService = require ("./ExplorerService"),
    fizzBuzzValidation = require ("./FizzBuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonfile ("explorers.json");
        return ExplorerService.filterByMission (explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonfile ("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission (explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonfile ("explorers.json");
        return ExplorerService.amountOfExplorers (explorers, mission);
    }

    static setFizzBuzzValidation(number){
        const fizzBuzzResult = fizzBuzzValidation.applyValidationInNumber (number);
        return fizzBuzzResult;
    }
}

module.exports = ExplorerController;