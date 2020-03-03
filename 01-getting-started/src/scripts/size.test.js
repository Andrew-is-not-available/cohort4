import functions1 from './size'

test('Check number size', () => {
    expect(functions1.isSize(-1)).toBe("large");
});  
