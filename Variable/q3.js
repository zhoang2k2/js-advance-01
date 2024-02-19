const name = 'global scope'

function printName() {
    const name = 'local scope'
    console.log(name);
}
console.log(name);

name = 'new value'
printName()
console.log(name);

// const khong the thay doi gia tri