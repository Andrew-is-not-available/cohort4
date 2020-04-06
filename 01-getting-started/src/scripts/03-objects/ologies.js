class Ologies {
    constructor(kind, discipline) {
        this.kind = kind;
        this.discipline = discipline;
    }

    getSummary() {
        return `The study of ${this.kind} ===> ${this.discipline}`
    }

}

// Instantiate Object
const study1 = new Ologies('Liver', 'Hepatology');
const study2 = new Ologies('Fungi', 'Mycology');
const study3 = new Ologies('Algae', 'Phycology');

console.log(study1.getSummary());
console.log(study2.getSummary());
console.log(study3.getSummary());