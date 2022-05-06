const explorers = require('../utils/Reader');

class ExplorerService{
    static filterByMission(explorers, mission){
        if(!Array.isArray(explorers) || typeof mission !== "string"){
            return "Los parámetros no son los correctos";
        }
    }

    static amountOfExplorers(explorers, mission){
        if(!Array.isArray(explorers) || typeof mission !== "string"){
            return "Los parámetros no son los correctos";
        }
    }

    static getExplorersUsernamesByMission(explorers, mission){
        if(!Array.isArray(explorers) || typeof mission !== "string"){
            return "Los parámetros no son los correctos";
        }
    }
}

module.exports = ExplorerService;