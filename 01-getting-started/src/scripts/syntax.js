




// sample if / else
// functions
// parameters
// returns
// arrays
// add to the front
// add to the end
// update values
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

};


export default functions;
