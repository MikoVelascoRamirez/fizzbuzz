class FizzBuzzService{
    static applyValidationInExplorer(explorer){
        if(explorer.constructor !== Object) return "El explorer debe ser un objeto";
    }
}

module.exports = FizzBuzzService;