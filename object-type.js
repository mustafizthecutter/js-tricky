const person = { name: 'mustafiz', age: 34 };

const student = new Object(person);
// console.log(student);

const human = Object.create(person);
// console.log(human.age);

class people {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const dim = new people('manush', 34);
// console.log(dim);

function manush(name) {
    this.name = name;
}
const peop = new manush('sakib');
console.log(peop);
