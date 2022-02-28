const friends = {
    name: 'mustafiz',
    age: 34,
    color: 'black',
}
const keys = Object.keys(friends);
console.log(keys);
const values = Object.values(friends);
console.log(values);
// Object.seal(friends);
friends.occupation = "student";
friends.age = 40;
// delete friends.color;
console.log(friends);
