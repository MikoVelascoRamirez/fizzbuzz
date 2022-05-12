const FizzBuzz = require("../lib/services/FizzBuzzService");

describe("Tests's suite for FizzBuzz Service", () => {
    test("1) Verify if the param is not an object", () => {
    // const explorer = {name: "explorer1", score: 1};
        const paramIsAnObject = FizzBuzz.applyValidationInExplorer([]);
        expect(paramIsAnObject).toMatch(/Parámetro inválido/);
    });

    test("2) Verify if the object contains the attribute 'score'", () => {
        const explorerExpected = { name: "explorer1", score: 1 };
        const paramIsAnObject = FizzBuzz.applyValidationInExplorer({ name: "explorer1", score: 1 });
        expect(paramIsAnObject).toEqual(expect.objectContaining(explorerExpected));
    });

    test("3) Verify if score's value it's not a number", () => {
        const paramIsAnObject = FizzBuzz.applyValidationInExplorer({ name: "explorer4", score: "asdsa" });
        expect(paramIsAnObject).toMatch(/Parámetro inválido/);
    });

    test("4) Verifying if the score is divisible by 3", () => {
        const explorer = { name: "explorer3", score: 6 };
        const objectWIthFizzTrickAttribute = FizzBuzz.applyValidationInExplorer(explorer);
        expect(objectWIthFizzTrickAttribute.trick).toBe("FIZZ");
    });

    test("5) Verifying if the score is divisible by 5", () => {
        const explorer = { name: "explorer10", score: 10 };
        const objectWIthFizzTrickAttribute = FizzBuzz.applyValidationInExplorer(explorer);
        expect(objectWIthFizzTrickAttribute.trick).toBe("BUZZ");
    });

    test("6) Verifying if the score is divisible by 3 and by 5", () => {
        const explorer = { name: "explorer15", score: 15 };
        const objectWIthFizzTrickAttribute = FizzBuzz.applyValidationInExplorer(explorer);
        expect(objectWIthFizzTrickAttribute.trick).toBe("FIZZBUZZ");
    });

    test("7) Verifying if the score is not divisible by 3 and by 5", () => {
        const explorer = { name: "explorer7", score: 7 };
        const objectWIthFizzTrickAttribute = FizzBuzz.applyValidationInExplorer(explorer);
        expect(objectWIthFizzTrickAttribute.trick).toBe(explorer.score);
    });

    //Tests for applyValidationInNumber()
    test("1) Verifying if the param recieved is not a number", () => {
        const fizzBuzzValidation = FizzBuzz.applyValidationInNumber("15");
        expect(fizzBuzzValidation).toBe("El parámetro debe ser un número");
    });

    test("2) Returning 'FIZZ' if the param is divisible by 3", () => {
        const fizzBuzzValidation = FizzBuzz.applyValidationInNumber(3);
        expect(fizzBuzzValidation).toBe("FIZZ");
    });

    test("3) Returning 'BUZZ' if the param is divisible by 5", () => {
        const fizzBuzzValidation = FizzBuzz.applyValidationInNumber(5);
        expect(fizzBuzzValidation).toBe("BUZZ");
    });

    test("4) Returning 'FIZZBUZZ' if the param is divisible by 5 and by 3", () => {
        const fizzBuzzValidation = FizzBuzz.applyValidationInNumber(15);
        expect(fizzBuzzValidation).toBe("FIZZBUZZ");
    });
});
