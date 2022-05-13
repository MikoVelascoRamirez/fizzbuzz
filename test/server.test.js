const request = require ("supertest"),
    app = require ("../lib/server");

describe ("Tests's suite of API Server", () => {
    test ("Checking if GET / returns a 200 status code", async (done) => {
        const response = await request (app).get ("/");
        expect (response.status).toBe (200);
        done ();
    });

    test ("Test if endpoint GET /v1/explorers/:mission returns a list with explorers", async (done) => {
        const techonology = "node",
            response = await request (app).get (`/v1/explorers/${techonology}`).send ();
        expect (response._body.explorers.length).not.toBe (0);
        done ();
    });

    test ("Test if endpoint GET /v1/explorers/:mission returns a list with node explorers", async (done) => {
        const techonology = "node",
            response = await request (app).get (`/v1/explorers/${techonology}`).send (),
            nodeExplorers = response._body.explorers;
        for(let i = 0; i < nodeExplorers.length; i++){
            expect (nodeExplorers[i].mission).toBe ("node");
        }
        expect (nodeExplorers.length).not.toBe (0);
        done ();
    });

    test ("Test if endpoint GET /v1/explorers/:mission returns a list with java explorers", async (done) => {
        const techonology = "java",
            response = await request (app).get (`/v1/explorers/${techonology}`).send (),
            nodeExplorers = response._body.explorers;
        for(let i = 0; i < nodeExplorers.length; i++){
            expect (nodeExplorers[i].mission).toBe ("java");
        }
        expect (nodeExplorers.length).not.toBe (0);
        done ();
    });

    test ("Checking if the response of GET /v1/explorers/amount/:mission has the correct attributes", async (done) => {
        const technology = "anythoingthintr",
            response = await request (app).get (`/v1/explorers/amount/${technology}`).send ();
        expect (response._body).toHaveProperty ("mission");
        expect (response._body).toHaveProperty ("quantity");
        done ();
    });

    test ("Getting amount of explorers in Node GET /v1/explorers/amount/:mission", async(done) => {
        const techonology = "node",
            response = await request (app).get (`/v1/explorers/amount/${techonology}`).send ();
        expect (response._body.quantity).toBe (10);
        done ();
    });

    test ("Getting amount of explorers in Java GET /v1/explorers/amount/:mission", async(done) => {
        const techonology = "java",
            response = await request (app).get (`/v1/explorers/amount/${techonology}`).send ();
        expect (response._body.quantity).toBe (5);
        done ();
    });

    test ("Checking if the response of GET /v1/explorers/usernames/node has the usernames of 10 explorers", async (done) => {
        const githubUsernamesOfNodeExplorers = ["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"],
            techonology = "node",
            response = await request (app).get (`/v1/explorers/usernames/${techonology}`).send ();
        expect (response._body.explorers).toEqual (expect.arrayContaining (githubUsernamesOfNodeExplorers));
        done ();
    });

    test ("Checking if the response of GET /v1/explorers/usernames/node has the usernames of 5 explorers", async (done) => {
        const githubUsernamesOfNodeExplorers = ["ajolonauta6", "ajolonauta7", "ajolonauta8", "ajolonauta9", "ajolonauta10"],
            techonology = "java",
            response = await request (app).get (`/v1/explorers/usernames/${techonology}`).send ();
        expect (response._body.explorers).toEqual (expect.arrayContaining (githubUsernamesOfNodeExplorers));
        done ();
    });

    // NEW FEATURE!!!
    test ("Checking if the response of GET /v1/fizzbuzz/:score returns a 200 status code", async (done) => {
        const number = 3,
            response = await request (app).get (`/v1/fizzbuzz/${number}`).send ();
        expect (response.status).toBe (200);
        done ();
    });

    test ("Testing if the response's object has the correct structure", async (done) => {
        const response = await request (app).get ("/v1/fizzbuzz/5").send ();
        expect (response._body).toHaveProperty ("score");
        expect (response._body).toHaveProperty ("trick");
        done ();
    });

    test ("Testing if the response's object returns 'FIZZ'", async (done) => {
        const response = await request (app).get ("/v1/fizzbuzz/3").send ();
        expect (response._body.trick).toBe ("FIZZ");
        done ();
    });

    test ("Testing if the response's object returns 'BUZZ'", async (done) => {
        const response = await request (app).get ("/v1/fizzbuzz/5").send ();
        expect (response._body.trick).toBe ("BUZZ");
        done ();
    });

    test ("Testing if the response's object returns 'FIZZBUZZ'", async (done) => {
        const response = await request (app).get ("/v1/fizzbuzz/30").send ();
        expect (response._body.trick).toBe ("FIZZBUZZ");
        done ();
    });
});