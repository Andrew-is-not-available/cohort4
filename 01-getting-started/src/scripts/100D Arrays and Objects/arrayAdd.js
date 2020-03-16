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
    }

};


export default functions;
