var name = 'global scope'

function printName() {
    var name = 'local scope'
    console.log(name);
}
console.log(name);

name = 'new value'
printName()
console.log(name);

// name in global scope bi thay doi, name in local khong bi thay doi