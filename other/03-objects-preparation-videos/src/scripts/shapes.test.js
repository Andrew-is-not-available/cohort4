 import shapes from './shapes'
 
 test('test plumbing', () =>{
    // console.log("Hello World from index.js")
    console.log(shapes);
    expect(shapes.hello()).toBe("Hello");
 });