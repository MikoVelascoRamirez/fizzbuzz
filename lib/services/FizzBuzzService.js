class FizzBuzzService{
    static applyValidationInExplorer(explorer){
        if(explorer.constructor !== Object) return "El explorer debe ser un objeto";
        else if (typeof explorer.score !== "number") return "El puntaje debe ser de tipo entero";
        else if (explorer.score % 5 === 0 && explorer.score % 3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
        else if (explorer.score % 5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }
        else if (explorer.score % 3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }

        explorer.trick = explorer.score;
        
        return explorer;
    }
}

module.exports = FizzBuzzService;