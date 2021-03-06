class FizzBuzzService {
    static applyValidationInExplorer(explorer) {
        if (explorer.constructor !== Object || typeof explorer.score !== "number") return "Parámetro inválido";
        if (explorer.score % 5 === 0 && explorer.score % 3 === 0) explorer.trick = "FIZZBUZZ";
        else if (explorer.score % 5 === 0) explorer.trick = "BUZZ";
        else if (explorer.score % 3 === 0) explorer.trick = "FIZZ";
        else explorer.trick = explorer.score;

        return explorer;
    }

    static applyValidationInNumber(number = 1){
        let result = "";
        if(number % 5 === 0 && number % 3 === 0) result = "FIZZBUZZ";
        else if(number % 3 === 0) result = "FIZZ";
        else if(number % 5 === 0) result = "BUZZ";
        else result = number;
        return result;
    }
}

module.exports = FizzBuzzService;
