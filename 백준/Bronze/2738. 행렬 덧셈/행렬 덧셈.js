const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, _] = input.shift().split(' ');
const arrA = input.slice(0, +n).map(e => e.split(' '));
const arrB = input.slice(+n).map(e => e.split(' '));

arrA.forEach((arr, idxA) =>{
  const sumArr = arr.map((e, idxE) => {
    const numA = Number(e);
    const numB = Number(arrB[idxA][idxE]);
    return numA + numB;
  })

  console.log(sumArr.join(' '))
})
