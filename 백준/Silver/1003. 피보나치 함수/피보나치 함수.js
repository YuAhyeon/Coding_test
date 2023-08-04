const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let memo = {};
let zero = 0;
let one = 0;

input.forEach((e) => {
  fibo(+e);
  console.log(`${zero} ${one}`);
  zero = 0;
  one = 0;
});

function fibo(n) {
  if (n === 0) {
    zero += 1;
    return 0;
  }
  if (n === 1) {
    one += 1;
    return 1;
  }

  if (memo[n]) {
    zero += memo[n].zero;
    one += memo[n].one;
    return memo[n].result;
  }

  const result = fibo(n - 1) + fibo(n - 2);
  memo[n] = { zero, one, result };
  return result;
}
