const fs = require("fs");

class Reader {
    static readJsonfile(path){
        const rawdata = fs.readFileSync(path);
    }
}

module.exports = Reader;