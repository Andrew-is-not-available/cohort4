
const oopfunctions = {
    play() {
        return "you have run play...";
    }
}
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hello there ${this.name}.`;
    }
    birthday() {
        this.age++;
    }
        
}
export default {oopfunctions, Person};