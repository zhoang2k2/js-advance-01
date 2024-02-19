function sum(a, b) {
    return a + b
}

function minus(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function calculate(a, b) {
    return {
        sum: sum(a, b),
        minus: minus(a, b),
        multiply: multiply(a, b)
    }

}

console.log(calculate(2, 1));