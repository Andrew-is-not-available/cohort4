global.fetch = require('node-fetch');

import { City, Community } from './cities.js'

const url = 'http://127.0.0.1:5000/';


test.skip('does the City class work?', () => {

    const city1 = new City('k1', 'A', 1, -1, 10);
    const city2 = new City('k2', 'B', 2, -2, 20);

    expect(city1.key).toBe('k1');
    expect(city2.key).toBe('k2');

    // Does show work?
    expect(city1.show()).toBe('A has a latitude of 1 and a longitude of -1 and a population of 10')

    // Does movedIn work?
    expect(city1.movedIn(22)).toBe(32);
    expect(city2.movedIn(10000)).toBe(10020);

    // Does movedOut work?
    expect(city1.movedOut(22)).toBe(10);
    expect(city2.movedOut(11)).toBe(10009);

    // Does howBig work?
    const city3 = new City("k3", 'Red Deer', 5, 6, 1000001);

    expect(city1.howBig()).toBe('Hamlet');
    expect(city2.howBig()).toBe('Town');
    expect(city3.howBig()).toBe('City')
});

test('Does Community class work?', async (done) => {

    
    const newCom = new Community;

    // Does createCity work?

    expect(newCom.list).toStrictEqual([]);

    await newCom.createCity('First City', 20.2, 10.1, 2000);

    
    expect(newCom.list[0].key).toBe(1);
    expect(newCom.list[0].name).toBe('First City');

    // // Does Hemisphere Work?


    await newCom.createCity('South City', -35.0000, 80.0000, 2000000);

    
    expect(newCom.whichSphere(newCom.list[1])).toBe('Southern Hemisphere');
    expect(newCom.whichSphere(newCom.list[0])).toBe('Northern Hemisphere');


    // Does most North and most South work?

    await newCom.createCity('Virginia City', 48.85341, 2.3488, 2148000);
    await newCom.createCity('South City', 42.8746, 74.5698, 976734);

    expect(newCom.getMostNorthern()).toBe('Virginia City is the most Northern city with latitude of 48.85341');
    expect(newCom.getMostSouthern()).toBe('South City');

    // Does getPop work?
    expect(newCom.getPop()).toBe(5126734);

    // does deleteCity work?
    newCom.deleteCity(4);
    console.log(newCom.list);
    
    expect(newCom.list.length).toBe(3);
    expect(newCom.list[0].name).toBe('First City');
//
    done();

}) 