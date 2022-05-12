const server = require("./lib/server");

const DEFAULT_PORT = 3000;

server.listen(DEFAULT_PORT, () => {
    console.log(`Fizzbuzz running at port ${DEFAULT_PORT}`);
});