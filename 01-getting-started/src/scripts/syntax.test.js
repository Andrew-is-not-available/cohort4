import functions from './syntax'

test('Check if it\'s a number', () => {
    expect(functions.isNumber(1)).toBe(true);
    expect(functions.isNumber("1")).toBe(false);
});  

test('Check if it\'s a string', () => {
    expect(functions.isString("Hello")).toBe('Hello is a string');
    expect(functions.isString(1)).toBe("1 is a string");
});  

test('Check if it\'s a Boolean', () => {
    expect(functions.isBoolean(10,9)).toBe(true);
    expect(functions.isBoolean(9,10)).toBe(false);
});

test('Check if it\'s an array', () => {
    expect(functions.checkMyArrayTrue()).toBe(true);
});
test('Check if it\'s NOT an array', () => {
    expect(functions.checkMyArrayFalse()).toBe(false);
});

test('Check a value in the array', () => {
    expect(functions.checkDictionary(0)).toBe("onion");
});
test('Check if returned value is undefined', () => {
    expect(functions.checkUndefined()).toBe(undefined);

});
test('Check a branch statment', () => {
    expect(functions.checkBranch(8)).toBe(true);
    expect(functions.checkBranch(3)).toBe(false);
});
test('Check a function', () => {
    expect(functions.watchMeSing("LaDeeDa")).toBe("LaDeeDa");
    expect(functions.watchMeSing(String)).toBe(String);
    expect(functions.watchMeSing(Boolean)).toBe(Boolean);
    expect(functions.watchMeSing(1)).toBe(1);
    expect(functions.watchMeSing(Number)).toBe(Number);
    expect(functions.watchMeSing(undefined)).toBe(undefined);
    expect(functions.watchMeSing(null)).toBe(null);
});
test('Add to front of an array', () => {
    expect(functions.addOntheFront("pizzaz")).
    toBe("pizzaz");
});
test('Add to back of an array', () => {
    expect(functions.addOnTheBack("palatability")).
    toBe("palatability");
});
test('Update one of the ingredients in the array', () => {
    expect(functions.updateAValue(1,"Chinese Garlic")).
    toBe("Chinese Garlic");
});
test('Initiate a For Loop and get the end result', () => {
    expect(functions.createAForLoop(0)).toBe(9);
});
test('Initiate a For In Loop and get the end result', () => {
    expect(functions.createForInLoop({
        firstName:"Agent",
        lastName:"Smith",
        occupation:"Rogue AI",
        motivator:"Escape From This Place"
})).toBe("AgentSmithRogue AIEscape From This Place");
});
test('Initiate a While Loop and get the end result', () => {
    expect(functions.createWhileLoop(0)).toBe(9);
});
test('Initiate a Do While Loop and get the end result', () => {
    expect(functions.createDoWhileLoop(0)).toBe(9);
});
test('OBJECT:  Input name of object and return its property', () => {
    expect(functions.checkObject({"num": 1},"num")).toEqual(1);
});
