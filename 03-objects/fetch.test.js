import functions from './fetchOLD.js'

const data = [
    { "name": "Maricica", "surname": "Ghinea", "gender": "female", "region": "Romania" }, 
    { "name": "Nishant", "surname": "Bhattarai", "gender": "male", "region": "Nepal" }, 
    { "name": "Nicuță", "surname": "Lotru", "gender": "male", "region": "Romania" }, 
    { "name": "Barbara", "surname": "Schneider", "gender": "female", "region": "United States" }, 
    { "name": "Stanca", "surname": "Grigoriu", "gender": "female", "region": "Romania" }, 
    { "name": "Bella", "surname": "Musker", "gender": "female", "region": "New Zealand" }, 
    { "name": "Fabian", "surname": "Dediu", "gender": "male", "region": "Romania" }, 
    { "name": "Славчо", "surname": "КОСТАДИНОВ", "gender": "male", "region": "Bulgaria" }, 
    { "name": "Upendra", "surname": "Ranjit", "gender": "male", "region": "Nepal" }, 
    { "name": "Dumitra", "surname": "Vicovean", "gender": "female", "region": "Romania" }
]

test('Does the plumbing work?', () => {
    expect(functions.getHello()).toBe("hello from the functions");
});

test('Does the getname work?', () => {
    expect(functions.getFirstName(data)).toBe("Maricica");
});

test('Does the getallnames work?', () => {
    expect(functions.getAllFirstNames(data).length).toBe(10);
});

test('Does the showdelay work?', () => {
    functions.showDelayProblem(data);
});

test('Does the showdelaysoln work?', () => {
    functions.showDelaySolution(data);
});

test('Does the getusers work?', () => {
    functions.getUsers(data);
});

test('Does the workwithData work?', () => {
    functions.workWithData(data);
});