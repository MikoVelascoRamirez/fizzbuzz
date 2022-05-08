//Part 1: Reading the file with the data 

const Reader = require('./lib/utils/Reader');
const explorers = Reader.readJsonfile("./explorers.json");
const ExplorerService = require("./lib/services/ExplorerService");
const fizzBuzzValidation = require("./lib/services/FizzBuzzService");

// Part 2: Get explorers in node
const explorersInNode = ExplorerService.filterByMission(explorers, "node");

//Part 3: Get length's list of explorers in Node
const listOfExplorersInNodeLength = ExplorerService.amountOfExplorers(explorers, "node")

// Part 4: Get the explorer's usernames in Node
const explorersInNodeToGetUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
//console.log(usernamesInNode)

// Part 5: Fizzbuzz validation
const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => fizzBuzzValidation.applyValidationInExplorer(explorer));
//console.log(explorersInNodeAndFizzTrick);
