let evenArr: number[] = [];
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    evenArr.push(i);
  }
}
console.log(evenArr);

let newArr: number[] = [...evenArr];
for (let j = 5; j <= 9; j++) {
  if (j % 2 !== 0) {
    newArr.push(j);
  }
}

export default newArr;
