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

    test("Test if endpoint GET /v1/explorers/:mission returns a list with java explorers", async () => {
        const techonology = "java";
        const response = await request(app).get(`/v1/explorers/${techonology}`).send();
        const nodeExplorers = response._body.explorers;
        for(let i = 0; i < nodeExplorers.length; i++){
            expect(nodeExplorers[i].mission).toBe("java");
        }
        expect(nodeExplorers.length).not.toBe(0);
    });

    test("Checking if the response of GET /v1/explorers/amount/:mission has the correct attributes", async () => {
        const technology = "anythoingthintr";
        const response = await request(app).get(`/v1/explorers/amount/${technology}`).send();
        expect(response._body).toHaveProperty("mission");
        expect(response._body).toHaveProperty("quantity");
    });

    test("Getting amount of explorers in Node GET /v1/explorers/amount/:mission", async() => {
        const techonology = "node";
        const response = await request(app).get(`/v1/explorers/amount/${techonology}`).send();
        expect(response._body.quantity).toBe(10);
    });

    test("Checking if the response of GET /v1/explorers/usernames/node has the usernames of 10 explorers", async () => {
        const githubUsernamesOfNodeExplorers = ["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"];
        const techonology = "node";
        const response = await request(app).get(`/v1/explorers/usernames/${techonology}`).send();
        expect(response._body.explorers).toEqual(expect.arrayContaining(githubUsernamesOfNodeExplorers));
    });
});