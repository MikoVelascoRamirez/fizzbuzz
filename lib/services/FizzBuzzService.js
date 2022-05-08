class FizzBuzzService{
    static applyValidationInExplorer(explorer){
        if(explorer.constructor !== Object) return "El explorer debe ser un objeto";
        else if (typeof explorer.score !== "number") return "El puntaje debe ser de tipo entero";
        else if (explorer.score % 3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }
        else if (explorer.score % 5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }
        
        return explorer;
    }
}

module.exports = FizzBuzzService;