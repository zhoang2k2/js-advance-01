function multiply(...val) {
    return console.log(val.reduce((a, b) => a * b, 1));
}

multiply(1)
multiply(1, 2)
multiply(1, 2, 3)
multiply(1, 2, 3, 4)