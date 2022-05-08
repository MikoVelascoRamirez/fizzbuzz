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
});