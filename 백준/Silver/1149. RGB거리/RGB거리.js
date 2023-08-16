const fs = require('fs');
let [N, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
arr = arr.map((e) => e.split(' ').map((e) => Number(e)));

for (let i = 1; i < Number(N); i += 1) {
  arr[i][0] += Math.min(arr[i - 1][1], arr[i - 1][2]);
  arr[i][1] += Math.min(arr[i - 1][0], arr[i - 1][2]);
  arr[i][2] += Math.min(arr[i - 1][0], arr[i - 1][1]);
}

console.log(Math.min(...arr[N - 1]));
