class FizzBuzzService{
    static applyValidationInExplorer(explorer){
        if(explorer.constructor !== Object) return "El explorer debe ser un objeto";
        else if (typeof explorer.score !== "number") return "El puntaje debe ser de tipo entero";
        
        return explorer;
    }
}

module.exports = FizzBuzzService;