const FizzBuzz = require('../lib/services/FizzBuzzService');

describe("Tests's suite fot FizzBuzz Service", () => {
    test("1) Verify if the param is not an object", () => {
        //const explorer = {name: "explorer1", score: 1};
        const paramIsAnObject = FizzBuzz.applyValidationInExplorer([]);
        expect(paramIsAnObject).toMatch(/El explorer debe ser un objeto/)
    });

    test("2) Verify if the object contains the attribute 'score'", () => {
        const explorerExpected = {name: "explorer1", score: 1};
        const paramIsAnObject = FizzBuzz.applyValidationInExplorer({name: "explorer1", score: 1});
        expect(paramIsAnObject).toEqual(expect.objectContaining(explorerExpected))
    });

    test("3) Verify if score's value it's not a number", () => {
        const paramIsAnObject = FizzBuzz.applyValidationInExplorer({name: "explorer4", score: "asdsa"});
        expect(paramIsAnObject).toMatch(/El puntaje debe ser de tipo entero/)
    });

    test("4) Verifying if the score is divisible by 3", () => {
        const explorer = {name: "explorer3", score: 6};
        const objectWIthFizzTrickAttribute = FizzBuzz.applyValidationInExplorer(explorer);
        expect(objectWIthFizzTrickAttribute.trick).toBe("FIZZ");
    });
});