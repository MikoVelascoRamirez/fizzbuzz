class ExplorerService {
    static filterByMission(explorers, mission) {
        if (!Array.isArray(explorers) || typeof mission !== "string") {
            return "Los parámetros no son los correctos";
        }

        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode;
    }

    static amountOfExplorers(explorers, mission) {
        if (!Array.isArray(explorers) || typeof mission !== "string") {
            return "Los parámetros no son los correctos";
        }

        const explorersInNodeLength = explorers.filter((explorer) => explorer.mission === mission).length;

        return explorersInNodeLength;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        if (!Array.isArray(explorers) || typeof mission !== "string") {
            return "Los parámetros no son los correctos";
        }

        const nodeExplorers = explorers.filter((explorer) => explorer.mission === mission);
        const githubUsernames = nodeExplorers.map((explorer) => explorer.githubUsername);

        return githubUsernames;
    }
}

module.exports = ExplorerService;
