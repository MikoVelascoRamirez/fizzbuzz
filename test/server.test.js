const request = require("supertest");
const app = require("../lib/server");

describe("Tests's suite of API Server", () => {
    test("Checking if GET / returns a 200 status code", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
    });

    test("Test if endpoint GET /v1/explorers/:mission returns a list with explorers", async () => {
        const response = await request(app).get("/v1/explorers/node").send();
        expect(response._body.explorers.length).not.toBe(0);
    });
});