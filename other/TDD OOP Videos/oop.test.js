import ooStuff from './oop.js'

// test('test the class', () =>{

//     const larry = new Person("Larry",29);
//     const lorraine = new Person("Lorraine",28);
    
//     console.log(larry.sayHello());
//     console.log(lorraine);
// });

// test('test the oop', () =>{
    // console.log(ooStuff);
    // console.log(ooStuff.oopfunctions.play());
    // console.log(larry)
//     const larry = new ooStuff.Person("Larry",29);
//     expect(larry.name).toBe("Larry");
//     expect(larry.age).toBe(29);
    
// });

test('test oop birthday', () =>{
    const family = [];
    family.push(new ooStuff.Person("Larry",29));
    family.push(new ooStuff.Person("Lorraine",28));
    expect(family[1].name).toBe("Lorraine");
    expect(family[1].age).toBe(28);

    family[1].birthday();
    expect(family[1].age).toBe(29);
    // expect(larry.age).toBe(29);
    
});