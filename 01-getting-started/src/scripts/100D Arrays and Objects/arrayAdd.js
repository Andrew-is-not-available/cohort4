const functions = {
    
    addToArray(workingArray,arrayElement) {
        // return("that is not a number");
        workingArray.push(arrayElement);
        return workingArray;
    },

    showArray(workingArray) {

        return "" + workingArray;
    },

    totalArray(workingArray) {
        // return workingArray.reduce((p,v) => p + v, 0);
        // function total(workingArray) {
        if(!Array.isArray(workingArray)) return;
        let sum=0;
        workingArray.forEach(each => {
            sum+=Number(each);
        });
        return sum;

    },
    
    clearArray(workingArray) {
        workingArray.length = 0
        return "" + workingArray
    },


    stateNames : {
        'NY' : "New York",
        'ON' : "Ontario"
    
    },
    lookupName(abbrev) {
        return functions.stateNames[abbrev];
    },

    addStateName(abbrev, stateName) {
        functions.stateNames[abbrev] = stateName;
    } 


};


export default functions;
