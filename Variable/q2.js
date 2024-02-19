let name = 'global scope'

function printName() {
    let name = 'local scope'
    console.log(name);
}
console.log(name);

name = 'new value'
printName()
console.log(name);