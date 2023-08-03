const fs = require('fs');
const [N, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const regex = /(\w)\1*/g;
const words = new Map();
let count = 0;

for (let word of arr) {
  const splitedWord = word.match(regex);

  for (let e of splitedWord) {
    words.set(e[0], (words.get(e[0]) || 0) + 1);
  }

  const result = [...words.values()].some((e) => e >= 2);
  if (!result) count += 1;
  words.clear();
}

console.log(count);
