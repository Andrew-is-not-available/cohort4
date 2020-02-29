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