const ExplorerService = require('../lib/services/ExplorerService');
const jsonExplorers = require('../lib/utils/Reader');
const Explorers = jsonExplorers.readJsonfile('explorers.json');

describe("Tests's suite for ExplorerService class", () => {
    test("1) Test if the params methods are not the correct", () => {
        const explorers = {}, mission = "node";
        const filterMission = ExplorerService.filterByMission(explorers, mission);
        const amountOfExplorers = ExplorerService.amountOfExplorers(explorers, mission);
        const explorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission);

        expect(filterMission).toBe("Los parámetros no son los correctos");
        expect(amountOfExplorers).toBe("Los parámetros no son los correctos");
        expect(explorersUsernames).toBe("Los parámetros no son los correctos");
    })

    test("2) Getting an array with the explorers on Node", () => {
        const explorersInNode = ExplorerService.filterByMission(Explorers, "node"); 

        for(let indexExplorer = 0; indexExplorer < explorersInNode.length; indexExplorer++){
            expect(explorersInNode[indexExplorer].mission).toBe("node");
        }
    });
});