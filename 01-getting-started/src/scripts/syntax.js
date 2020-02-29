// number
// string
// boolean
// array
// dictionary / objects
// undefined
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


const functions = {
    isNumber: (num) => {
        if (num*1 !==num) return false;
        return true;
    },
    
    isString: (text) => {
        return text + " is a string";
        return false;
    },

    isBoolean: (a,b) => {
        return (a>b);
    }

    // isArray:  () => {
    //     var veggies 
    // }
};


export default functions;
