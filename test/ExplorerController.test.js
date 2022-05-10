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

    test("(3) Getting Github's usernames of explorers in Node", () => {
        const githubUsernamesOfNodeExplorers = ["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"];
        const nodeExplorersUsernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(nodeExplorersUsernames).toEqual(expect.arrayContaining(githubUsernamesOfNodeExplorers));
    });
});