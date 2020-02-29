import functions from './syntax'

test('Check', () => {
    expect(functions.isNumber(1)).toBe(true);
    expect(functions.isNumber("1")).toBe(false);
    
    expect(functions.isString("Hello")).toBe('Hello is a string');
    expect(functions.isString()).toBe(false);
    
    expect(functions.isBoolean(10,9)).toBe(true);
    expect(functions.isBoolean(9,10)).toBe(false);

});

