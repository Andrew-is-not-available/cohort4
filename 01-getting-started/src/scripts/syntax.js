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
    },
// loops 
// for
    createAForLoop:  (num) => {
        for (let i = 0; i < 9; i++) {
            num = num + 1;
        }
        return num;
    },

// loops 
// for/in
    createForInLoop: (person) => {
        var text = "";
        var x;
        for (x in person) {
            text += person[x];
        }
    return text;
    },

// loops 
// while
    createWhileLoop: (num) => {
        let i = 0;
        while (i < 9) {
            num = num +1; 
            i++;
        }
    return num;
    },

// loops 
// do while
    createDoWhileLoop: (num) => {
        let i = 0
        do {num = num +1;
        i++;
        }
        while (i < 9);
        return num;
    }

// loops 
// forEach (with array and function)
// come back to this one

// Objects / Dictionaries
// declare object
// lookup key to retrieve value


};


export default functions;
