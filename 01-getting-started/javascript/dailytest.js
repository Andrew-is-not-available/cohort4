import functions from './daily.js'

test('Check temperature conversion', () => {
    expect(functions.convertToFarenheit(0)).toBe(-32);
});  
