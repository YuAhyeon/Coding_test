const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const slicesNeeded = input[1].split(' ').map((e) => +e);

const totalTime = new Array(N).fill(0);
const queue = [];
let time = 0;

for (let i = 0; i < N; i += 1) {
  queue.push(i);
}

while (queue.length > 0) {
  const current = queue.shift();
  slicesNeeded[current] -= 1;

  slicesNeeded[current] === 0
    ? (totalTime[current] = time + 1)
    : queue.push(current);

  time += 1;
}

console.log(totalTime.join(' '));
