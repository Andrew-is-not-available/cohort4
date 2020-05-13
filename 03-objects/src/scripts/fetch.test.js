import functions from './fetch.js';
global.fetch = require('node-fetch');

test('Fetch test', async () => {
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
    { "name": "Dumitra", "surname": "Vicovean", "gender": "female", "region": "Romania" }]

  expect(await functions.getHello()).toBe("hello from the functions")
  expect(await functions.getFirstName(data)).toBe('Maricica');
  expect(await functions.getAllFirstNames(data).length).toBe(10)

});

const url = 'http://127.0.0.1:5000/';

test('does Fetch work?', async () => {

  const clients = [
    { key: 1, name: 'Jim' },
    { key: 2, name: 'Joe' },
  ]

  let data = await functions.postData(url + 'clear');
  expect(data.status).toEqual(200);

  data = await functions.postData(url + 'add', clients[0]);
  expect(data.status).toEqual(200);

  data = await functions.postData(url + 'all');
  expect(data.status).toEqual(200);
  expect(data.length).toBe(1);
  expect(data[0].name).toBe("Jim");

  data = await functions.postData(url + 'add', clients[0]);
  expect(data.status).toEqual(400);

  data = await functions.postData(url + 'add', clients[1]);
  expect(data.status).toEqual(200);

  data = await functions.postData(url + 'all');
  expect(data.status).toEqual(200);
  expect(data.length).toBe(2);
  expect(data[1].name).toBe("Joe");

  data = await functions.postData(url + 'read', { key: 1 });
  expect(data.status).toEqual(200);
  expect(data.length).toBe(1);
  expect(data[0].name).toBe("Jim");

  data = await functions.postData(url + 'update', { key: 1, name: "Jules" });
  expect(data.status).toEqual(200);

  data = await functions.postData(url + 'read', { key: 1 });
  expect(data.status).toEqual(200);
  expect(data.length).toBe(1);
  expect(data[0].name).toBe("Jules");

  data = await functions.postData(url + 'delete', { key: 1 });
  expect(data.status).toEqual(200);

  data = await functions.postData(url + 'delete', { key: 2 });
  expect(data.status).toEqual(200);

  data = await functions.postData(url + 'read', { key: 1 });
  expect(data.status).toEqual(400);
})