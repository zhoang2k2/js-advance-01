const person = {
    firstName: "nguyen",
    lastName: "a",
    age: 20,
};

let { firstName: a, lastName: b, age: c } = person;

console.log('firstName: ', a);
console.log('lastName: ', b);
console.log('age: ', c);