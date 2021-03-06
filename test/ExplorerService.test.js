const ExplorerService = require ("../lib/services/ExplorerService"),
    jsonExplorers = require ("../lib/utils/Reader");

const Explorers = jsonExplorers.readJsonfile ("explorers.json");

describe ("Tests's suite for ExplorerService class", () => {
    test ("1) Test if the params methods are not the correct", () => {
        const explorers = {}, 
            mission = "node",
            filterMission = ExplorerService.filterByMission (explorers, mission),
            amountOfExplorers = ExplorerService.amountOfExplorers (explorers, mission),
            explorersUsernames = ExplorerService.getExplorersUsernamesByMission (explorers, mission);

        expect (filterMission).toBe ("Los parámetros no son los correctos");
        expect (amountOfExplorers).toBe ("Los parámetros no son los correctos");
        expect (explorersUsernames).toBe ("Los parámetros no son los correctos");
    });

    test ("2) Getting an array with the explorers on Node", () => {
        const explorersInNode = ExplorerService.filterByMission (Explorers, "node");

        for (let indexExplorer = 0; indexExplorer < explorersInNode.length; indexExplorer++) {
            expect (explorersInNode[indexExplorer].mission).toBe ("node");
        }
    });

    test ("3) Checking if the amount of Node's explorers's list is 10", () => {
        const explorersInNodeLength = ExplorerService.amountOfExplorers (Explorers, "node");
        expect (explorersInNodeLength).toEqual (10);
    });

    test ("4) Get github's usernames of explorers in node", () => {
        const githubUsernamesOfNodeExplorers = ["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"];

        expect (ExplorerService.getExplorersUsernamesByMission (Explorers, "node")).toEqual (expect.arrayContaining (githubUsernamesOfNodeExplorers));
    });
});
