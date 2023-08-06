const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n, s;
let v = [];

n = parseInt(input[0], 10);
v = input[1].split(' ').map((e) => parseInt(e, 10));
s = parseInt(input[2], 10);

for (let i = 0; i < n && s; i += 1) {
  let max = v[i];
  let maxi = i;
  for (let j = i + 1; j < n && j <= i + s; j += 1) {
    if (max < v[j]) {
      max = v[j];
      maxi = j;
    }
  }
  s -= maxi - i;

  while (maxi > i) {
    v[maxi] = v[maxi - 1];
    maxi -= 1;
  }

  v[i] = max;
}

console.log(v.join(' '));
