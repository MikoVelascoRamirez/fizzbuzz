class ExplorerService{
    static filterByMission(explorers, mission){
        if(!Array.isArray(explorers) || typeof mission !== "string"){
            return "Los parámetros no son los correctos";
        }

        const explorersInNode = explorers.filter( explorer => explorer.mission === mission);
        return explorersInNode;
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