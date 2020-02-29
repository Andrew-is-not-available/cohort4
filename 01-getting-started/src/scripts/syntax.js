
// loops 
// for
// for/in
// while
// do while
// forEach (with array and function)
// Objects / Dictionaries
// declare object
// lookup key to retrieve value

// number
const functions = {
    isNumber: (num) => {
        if (num*1 !==num) return false;
        return true;
    },
// string  
    isString: (text) => {
        return text + " is a string";
        return false;
    },
// boolean
    isBoolean: (a,b) => {
        return (a>b);
    },
// array
    checkMyArrayTrue:  () => {
        let resultTrue = Array.isArray(["onion","purple garlic",
        "celery","carrots","frozen tomatoes"]);
        return resultTrue;

    },
    checkMyArrayFalse:  () => {
//Easily changed by removing the [SQUARE BRACKETS] to cause fail
        let resultFalse= Array.isArray("onion","purple garlic",
        "celery","carrots","frozen tomatoes");
        return resultFalse; 
    },

// dictionary / objects
    checkDictionary: (num) => {
        let ingredients = ["onion","purple garlic",
        "celery","carrots","frozen tomatoes"]
        let value = ingredients[num];
        return value;
    },
// undefined
    checkUndefined: () => {
        var noDefinition;

    },
// sample if / else
    checkBranch: (num) => {
        if (num % 2 == 0) return true;
        return false;
    },
// functions, parameters, returns,
// check it returns every data type
    watchMeSing: (song) => {
        return song;
    },
// arrays
// add to the front
    addOntheFront: (value) => {
        let ingredients = ["onion","purple garlic",
        "celery","carrots","frozen tomatoes"]
        ingredients.unshift(value);
        return ingredients[0];
    },
// arrays
// add to the end
    addOnTheBack: (value) => {
        let ingredients = ["onion","purple garlic",
        "celery","carrots","frozen tomatoes"]
        ingredients.push(value);
        return ingredients[ingredients.length-1];
    },

// arrays
// update values
    updateAValue: (index,string) => {
        let ingredients = ["onion","purple garlic",
        "celery","carrots","frozen tomatoes"]
        ingredients[index-1] = string
        return ingredients[index-1];
    }
};


export default functions;
