const request = require("supertest");
const app = require("../lib/server");

describe("Tests's suite of API Server", () => {
    test("Checking if GET / returns a 200 status code", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
    });
});