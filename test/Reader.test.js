const Reader = require('../lib/utils/Reader');

describe("Suite's tests for Reader class", () => {
    const nameFile = "explorers.jsonss";
    test("1) Checking if the file exists", () => {
        expect(()=> Reader.readJsonfile(nameFile)).toThrowError('ENOENT');
    });

    test("2) The file is empty?", () => {
        const nameFile = "explorers.json";
        const fileContent = Reader.readJsonfile(nameFile);
        expect(fileContent).not.toBeUndefined();
    });
    /*test();
    test();*/
});