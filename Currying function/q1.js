function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}

const mul1 = multiply(2);
const mul2 = mul1(3);
const result = mul2(5);

console.log(result);