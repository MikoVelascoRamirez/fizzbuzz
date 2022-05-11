const request = require("supertest");
const app = require("../lib/server");

describe("Tests's suite of API Server", () => {
    test("Checking if GET / returns a 200 status code", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
    });

    test("Test if endpoint GET /v1/explorers/:mission returns a list with explorers", async () => {
        const techonology = "node";
        const response = await request(app).get(`/v1/explorers/${techonology}`).send();
        expect(response._body.explorers.length).not.toBe(0);
    });

    test("Test if endpoint GET /v1/explorers/:mission returns a list with node explorers", async () => {
        const techonology = "node";
        const response = await request(app).get(`/v1/explorers/${techonology}`).send();
        const nodeExplorers = response._body.explorers;
        for(let i = 0; i < nodeExplorers.length; i++){
            expect(nodeExplorers[i].mission).toBe("node");
        }
        expect(nodeExplorers.length).not.toBe(0);
    });
});