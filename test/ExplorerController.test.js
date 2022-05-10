const ExplorerController = require("../lib/services/ExplorerController");

describe("Tests's suite of ExplorerController", () => {
    test("1) Getting a list of explorers in Node", () => {
        const nodeExplorersList = ExplorerController.getExplorersByMission("node");
        for (let indexExplorer = 0; indexExplorer < nodeExplorersList.length; indexExplorer++) {
            expect(nodeExplorersList[indexExplorer].mission).toBe("node");
        }
    });

    test("2) Getting number of explorers in Node", () => {
        const amountExplorersInNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(amountExplorersInNode).toEqual(10);
    });
});