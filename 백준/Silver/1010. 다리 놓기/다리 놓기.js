const fs = require('fs');
const [T, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

arr.forEach((e) => {
  const [N, M] = e.split(' ');
  console.log(dp(+N, +M));
});

function dp(N, M) {
  const arr = Array.from(Array(M + 1), () => new Array(M + 1).fill(0));

  for (let i = 1; i <= M; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      j === 0 || i === j
        ? (arr[i][j] = 1)
        : (arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]);
    }
  }

  return arr[M][N];
}
