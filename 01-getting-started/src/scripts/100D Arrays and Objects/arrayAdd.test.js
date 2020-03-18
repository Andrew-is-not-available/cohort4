import arrayAdd from './arrayAdd.js'

// test('Does that array function work?', () => {
//     // expect(functions.workingWithArrays(1)).toBe(0);
//     const workingArray = [];
//     expect(workingArray.length).toBe(0);
//     const workingArrayNew = functions.addToArray(workingArray, 3);
//     expect(workingArrayNew.length).toBe(1);
//     expect(workingArrayNew[0]).toBe(3);
//     const workingArrayNew2 = functions.addToArray(workingArray, 4);
//     expect(workingArrayNew2[0]).toBe(3);
// });

test('Does that library function work?', () => {
    const fullName = arrayAdd.lookupName('ON');
    expect(fullName).toBe("Ontario");
    expect(arrayAdd.lookupName('NY')).toBe("New York");
    
    expect(arrayAdd.lookupName('NSW')).toBeFalsy();

    arrayAdd.addStateName('TX', "Texas");

    expect(arrayAdd.lookupName('TX')).toBe("Texas");

});
